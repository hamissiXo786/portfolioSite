import express from 'express';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// SSRF protection: reject requests to private/internal hosts
function isSafeUrl(urlString) {
  let parsed;
  try {
    parsed = new URL(urlString);
  } catch {
    return false;
  }

  if (parsed.protocol !== 'https:') return false;

  const host = parsed.hostname.toLowerCase();
  const privatePatterns = [
    /^localhost$/,
    /^127\./,
    /^10\./,
    /^192\.168\./,
    /^172\.(1[6-9]|2\d|3[01])\./,
    /^169\.254\./,
    /^::1$/,
    /^fc00:/,
    /^fe80:/,
  ];

  return !privatePatterns.some((pattern) => pattern.test(host));
}

// GET /download?url=<encoded_url>
app.get('/download', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter.' });
  }

  let decodedUrl;
  try {
    decodedUrl = decodeURIComponent(url);
  } catch {
    return res.status(400).json({ error: 'Invalid URL encoding.' });
  }

  if (!isSafeUrl(decodedUrl)) {
    return res
      .status(400)
      .json({ error: 'URL must be a public HTTPS address.' });
  }

  let upstream;
  try {
    upstream = await fetch(decodedUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) ' +
          'AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
        Accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
        Referer: 'https://www.tiktok.com/',
      },
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
    });
  } catch (err) {
    if (err.name === 'TimeoutError') {
      return res.status(504).json({ error: 'Request to TikTok timed out.' });
    }
    return res
      .status(502)
      .json({ error: 'Could not reach the sticker URL.' });
  }

  if (!upstream.ok) {
    const msg =
      upstream.status === 403 || upstream.status === 401
        ? 'Sticker URL has expired or is restricted — copy it again from TikTok.'
        : `Could not fetch sticker (upstream ${upstream.status}).`;
    return res.status(502).json({ error: msg });
  }

  const contentType = upstream.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    return res
      .status(422)
      .json({ error: "That URL doesn't point to an image." });
  }

  let buffer;
  try {
    buffer = Buffer.from(await upstream.arrayBuffer());
  } catch {
    return res.status(502).json({ error: 'Failed to read image data.' });
  }

  let jpegBuffer;
  try {
    jpegBuffer = await sharp(buffer, { animated: false })
      .resize(512, 512, {
        fit: 'inside',
        withoutEnlargement: false,
      })
      .jpeg({ quality: 90 })
      .toBuffer();
  } catch {
    return res.status(500).json({ error: 'Failed to convert image to JPG.' });
  }

  res.set({
    'Content-Type': 'image/jpeg',
    'Content-Disposition': 'attachment; filename="sticker.jpg"',
    'Content-Length': jpegBuffer.length,
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-store',
  });
  res.send(jpegBuffer);
});

app.listen(PORT, () => {
  console.log(`Sticker Saver running at http://localhost:${PORT}`);
});
