import { SiPython, SiR, SiJupyter, SiNvidia, SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiChartdotjs, SiLooker, SiTableau, SiGrafana, SiCplusplus, SiOpencv, SiTensorflow, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiTailwindcss, SiPhp, SiExpress, SiFlask, SiFastapi, SiRos, SiApacheairflow, SiMysql, SiPostgresql, SiGit, SiDocker, SiFigma, SiCanva } from 'react-icons/si'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi"
import { FaChartPie, FaChartBar } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";

import AirflowFlask from '@public/projects/airflow_docker_flask.jpeg'
import ChocoWeb from '@public/projects/choco_web.png'
import ExpressDashboard from '@public/projects/express_dashboard.jpeg'
import FingerDetection from '@public/projects/finger_detection.jpg'
import GrafanaDashboard from '@public/projects/grafana_export_import.jpeg'
import Jalavahana from '@public/projects/jalavahana.jpg'
import Lawana from '@public/projects/lawana.jpg'
import PensNews from '@public/projects/pens_news.png'
import PortfolioWeb from '@public/projects/portfolio_web.jpeg'
import PowerbiMart from '@public/projects/powerbi_minimart.jpg'
import PwaRestoApp from '@public/projects/pwa_resto_app.jpeg'
import QuestStreamlit from '@public/projects/questionnaire_streamlit.jpeg'
import RestfulNotesApp from '@public/projects/restful_notes_app.jpeg'
import RockPaperScissors from '@public/projects/rock_paper_scissors.jpeg'
import SalesDashboard from '@public/projects/sales_dashboard.jpeg'

{ /* @/components/sections/Hero.tsx */ }

export const roles = [
  'Data Science Student',
  'Computer Vision Engineer',
  'Frontend Developer'
]

export const socialLinks = [
  { 
    Icon: FiGithub, 
    href: "https://github.com/ArielSulton",
    ariaLabel: "GitHub"
  },
  { 
    Icon: FiLinkedin, 
    href: "https://linkedin.com/in/arielsulton",
    ariaLabel: "LinkedIn"
  },
  { 
    Icon: FiInstagram, 
    href: "https://instagram.com/arielsulton",
    ariaLabel: "Instagram"
  },
  { 
    Icon: FiMail, 
    href: "mailto:arielbusinesses123@gmail.com",
    ariaLabel: "Email"
  }
]

{ /* @/components/sections/Skills.tsx */ }

export const categories = [
  {
    key: 'data_science',
    name: 'Data Science',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'R', icon: SiR, color: '#276DC3' },
      { name: 'Jupyter Notebook', icon: SiJupyter, color: '#F37626' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Pandas', icon: SiPandas, color: '#150458' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' }
    ]
  },
  {
    key: 'data_visualization',
    name: 'Data Visualization',
    skills: [
      { name: 'Matplotlib', icon: FaChartPie, color: '#11557c' },
      { name: 'Seaborn', icon: FaChartBar, color: '#3776ab' },
      { name: 'Plotly.js', icon: SiPlotly, color: '#ffffff' },
      { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
      { name: 'Power BI', icon: BsBarChartFill, color: '#F2C811' },
      { name: 'Looker Studio', icon: SiLooker, color: '#4285F4' },
      { name: 'Tableau', icon: SiTableau, color: '#E97627' },
      { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
    ]
  },
  {
    key: 'computer_vision',
    name: 'Computer Vision',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'OpenCV', icon: SiOpencv, color: '#0000FF' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'YOLO', icon: LuBrainCircuit, color: '#0B23A9' },
      { name: 'TensorRT', icon: SiNvidia, color: '#76B900' }
    ]
  },
  {
    key: 'frontend_tools',
    name: 'Frontend Tools',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' }
    ]
  },
  {
    key: 'backend_tools',
    name: 'Backend Tools',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
      { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' }
    ]
  },
  {
    key: 'other_tools',
    name: 'Other Tools',
    skills: [
      { name: 'ROS', icon: SiRos, color: '#FFFFFF' },
      { name: 'Airflow', icon: SiApacheairflow, color: '#0CB6FF' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' }
    ]
  }
]

{ /* @/components/sections/Projects.tsx */ }

export const projects = [
  {
    title: 'CHO.CO Website',
    date: 'Jul 2023 - Aug 2023',
    image: ChocoWeb,
    link: 'https://github.com/ArielSulton/CHO.CO-website',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  },
  {
    title: 'News Website',
    date: 'Aug 2023',
    image: PensNews,
    link: 'https://github.com/ArielSulton/CRUD-news-portal',
    technologies: ['PHP', 'CSS'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  },
  {
    title: 'Finger Counter',
    date: 'Jan 2024',
    image: FingerDetection,
    link: 'https://github.com/ArielSulton/simple-finger-detection',
    technologies: ['C++', 'OpenCV'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['ML']
  },
  {
    title: 'PKM\'24: Jalavahana',
    date: 'May 2024 - Aug 2024',
    image: Jalavahana,
    link: 'https://github.com/ArielSulton/',
    technologies: ['Python', 'Flask', 'Plotly.js', 'Leaflet.js'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB', 'DS']
  },
  {
    title: 'KKI\'24: Lawana',
    date: 'Aug 2024 - Oct 2024',
    image: Lawana,
    link: 'https://github.com/ArielSulton/',
    technologies: ['Python', 'YOLO', 'TensorRT', 'ROS'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['ML']
  },
  {
    title: 'Power BI Dashboard',
    date: 'Sep 2024',
    image: PowerbiMart,
    link: 'https://github.com/ArielSulton/',
    technologies: ['Power BI'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['DS']
  },
  {
    title: 'Notes App',
    date: 'Sep 2024',
    image: RestfulNotesApp,
    link: 'https://github.com/ArielSulton/restful-notes-app',
    technologies: ['JavaScript', 'Node.js', 'REST API'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  },
  {
    title: 'Grafana Dashboard',
    date: 'Oct 2024',
    image: GrafanaDashboard,
    link: 'https://github.com/ArielSulton/',
    technologies: ['Grafana'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['DS']
  },
  {
    title: 'Rock Paper Scissors',
    date: 'Oct 2024',
    image: RockPaperScissors,
    link: 'https://github.com/ArielSulton/rock-paper-scissors',
    technologies: ['Jupyter Notebook', 'TensorFlow'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['ML']
  },
  {
    title: 'Form Processing',
    date: 'Oct 2024 - Nov 2024',
    image: QuestStreamlit,
    link: 'https://github.com/ArielSulton/questionnaire-streamlit',
    technologies: ['Jupyter Notebook', 'Python', 'Streamlit'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['DS']
  },
  {
    title: 'Vehicle Tester',
    date: 'Nov 2024',
    image: ExpressDashboard,
    link: 'https://github.com/ArielSulton/realtime-express-dashboard',
    technologies: ['JavaScript', 'Express.js', 'Tailwind'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  },
  {
    title: 'Sales Dashboard',
    date: 'Nov 2024',
    image: SalesDashboard,
    link: 'https://github.com/ArielSulton/simple-sales-dashboard',
    technologies: ['PHP', 'CSS', 'JavaScript'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB', 'DS']
  },
  {
    title: 'Restaurant App',
    date: 'Nov 2024 - Dec 2024',
    image: PwaRestoApp,
    link: 'https://github.com/ArielSulton/PWA-restaurant-app',
    technologies: ['JavaScript', 'Node.js', 'Jest', 'PWA'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  },
  {
    title: 'Financial Dashboard',
    date: 'Dec 2024',
    image: AirflowFlask,
    link: 'https://github.com/ArielSulton/airflow-docker-website',
    technologies: ['Python', 'Flask', 'Airflow', 'Docker'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB', 'DS']
  },
  {
    title: 'Portofolio Website',
    date: 'Dec 2024',
    image: PortfolioWeb,
    link: 'https://github.com/ArielSulton/portfolio-website',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['WEB']
  }
]