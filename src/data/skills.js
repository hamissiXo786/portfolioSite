import {
  SiPython, SiCplusplus, SiJavascript, SiReact, SiNodedotjs, SiMongodb,
} from 'react-icons/si'
import { FaShieldAlt, FaBug, FaChartLine, FaLock } from 'react-icons/fa'

export const securityTools = [
  { name: 'Wireshark', icon: FaChartLine },
  { name: 'Metasploit', icon: FaBug },
  { name: 'Splunk', icon: FaShieldAlt },
  { name: 'Burp Suite', icon: FaLock },
]

export const programmingLanguages = [
  { name: 'Python', icon: SiPython },
  { name: 'C / C++', icon: SiCplusplus },
  { name: 'JavaScript', icon: SiJavascript },
]

export const webTech = [
  { name: 'React.js', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
]

export const certifications = ['CompTIA Security+', 'CEH', 'CompTIA CySA+', 'CISSP', 'GIAC', 'OSCP']

export const services = ['Security Audits', 'Network Defense', 'Web Development']

export const devTools = ['GitHub', 'VS Code', 'PyCharm', 'IntelliJ']
