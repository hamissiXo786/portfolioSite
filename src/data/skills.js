import {
  SiSharp, SiHtml5, SiCss, SiPython, SiDart, SiJavascript,
  SiBootstrap, SiDjango, SiDotnet, SiFlutter, SiAngular,
  SiSqlite, SiMysql, SiGit,
} from 'react-icons/si'
import { FaDatabase, FaPalette, FaCode } from 'react-icons/fa'

export const languages = [
  { name: 'C#', icon: SiSharp },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'Python', icon: SiPython },
  { name: 'Dart', icon: SiDart },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'SQL', icon: FaDatabase },
]

export const frameworks = [
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Django', icon: SiDjango },
  { name: 'ASP.NET Core', icon: SiDotnet },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Angular', icon: SiAngular },
]

export const tools = [
  { name: 'SQLite', icon: SiSqlite },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Photoshop', icon: FaPalette },
  { name: 'GIT', icon: SiGit },
  { name: 'Visual Studio', icon: FaCode },
]

export const services = ['Web Development', 'Mobile App Development', 'Teaching & Training']
