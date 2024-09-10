//portfolio
import hostel from '../assets/Portfolio/hostel.jpg'
import health from '../assets/Portfolio/health.jpg'
import festival from '../assets/Portfolio/festival.jpg'
import rescue from '../assets/Portfolio/rescue.jpg'
import baizu from '../assets/Portfolio/baizu.jpg'

//teams
import aneek from '../assets/Team/Aneek.jpg'
import puja from '../assets/Team/Puja.jpg'
import simpy from '../assets/Team/simpy.jpg'
import sahel from '../assets/Team/Sahel.jpg'
import priya from '../assets/Team/Priya.jpg'
import khushi from '../assets/Team/Khushi.jpg';
import asham from '../assets/Team/Asham.jpg';
import omkar from '../assets/Team/Omkar.jpg'
import priyanshu from '../assets/Team/Priyanshu.jpg'
import srijita from '../assets/Team/Srijita.jpg'
import kritika from '../assets/Team/kritika.jpg'
import sumedha from '../assets/Team/sumedha.jpg'

//gallery
import img1 from '../assets/Gallery/img1.jpg'
import img2 from '../assets/Gallery/img2.jpg'
import img3 from '../assets/Gallery/img3.jpg'
import img4 from '../assets/Gallery/img4.jpg'
import img5 from '../assets/Gallery/img5.jpg'
import img6 from '../assets/Gallery/img6.jpg'

//career
import web from '../assets/Career/web.png'
import app from '../assets/Career/app.png'
import ml from '../assets/Career/ml.png'
import digital from '../assets/Career/digital.png'


export const portfolioData = [
  {
    title: 'Hostel Booking System',
    description: 'Designed full stack web application for room booking of a hostel chain company',
    imageUrl: `${hostel}`
  },
  {
    title: 'Health Risk Assesment System',
    description: 'Developed a system to assesses the health risks associated with diabetes and hypertension',
    imageUrl: `${health}`
  },
  {
    title: 'Festival connect',
    description: 'Created social media for connecting people during festivals',
    imageUrl: `${festival}`
  },
  {
    title: 'Rescue Ride',
    description: 'Developed an ambulance booking system for emergency ride',
    imageUrl: `${rescue}`
  },
  {
    title: 'Baizus Hotel',
    description: 'Designed an app and increased app engagement for a hotel-chain company',
    imageUrl: `${baizu}`
  },
];

export const teamData = [
  {
    imgUrl: `${aneek}`,
    name: 'ANEEK MAJUMDAR',
    role: 'Chief Executive Officer'
  },
  {
    imgUrl: `${puja}`,
    name: 'PUJA MONDAL',
    role: 'HR Manager, Front-End Developer'
  },
  {
    imgUrl: `${simpy}`,
    name: 'SIMPY KUMARI NONIA',
    role: 'Full-Stack Developer'
  },
  {
    imgUrl: `${sahel}`,
    name: 'SAHEL BEJ',
    role: 'Data Scientist'
  },
  {
    imgUrl: `${kritika}`,
    name: 'KRITIKA DAS',
    role: 'ML Engineer'
  },
  {
    imgUrl: `${sumedha}`,
    name: 'SUMEDHA SARKAR',
    role: 'Backend Developer'
  },
  {
    imgUrl: `${priya}`,
    name: 'PRIYA ROY',
    role: 'Front-End Developer Intern'
  },
  {
    imgUrl: `${khushi}`,
    name: 'KHUSHI JAISWAL',
    role: 'Front-End Developer Intern'
  },
  {
    imgUrl: `${asham}`,
    name: 'MD. ASHAM IMAD',
    role: 'Full-Stack Developer Intern'
  },
  {
    imgUrl: `${omkar}`,
    name: 'OMKAR ABHISHEK JHA',
    role: 'Front-End Developer Intern'
  },
  {
    imgUrl: `${priyanshu}`,
    name: 'PRIYANSHU DEY',
    role: 'Backend Developer Intern'
  },
  {
    imgUrl: `${srijita}`,
    name: 'SRIJITA DAS',
    role: 'Backend Developer Intern'
  },
];

export const services = [
  {
    title: 'Training',
    description: 'Tailored technology solutions to optimize your business operations.',
    icon: '🛠️', // Use your preferred icon or image here
  },
  {
    title: 'IT Solutions',
    description: 'Expert-led programs to enhance your skills and knowledge.',
    icon: '💻',
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns to boost your online presence and engagement!',
    icon: '📈',
  },
];

export const galleryData = [
  {
      src: `${img1}`,
      alt: 'Image 1',
    },
    {
      src: `${img2}`,
      alt: 'Image 2',
    },
    {
      src: `${img3}`,
      alt: 'Image 3',
    },
    {
      src: `${img4}`,
      alt: 'Image 4',
    },
    {
      src: `${img5}`,
      alt: 'Image 5',
    },
    {
      src: `${img6}`,
      alt: 'Image 6',
    },
];

export const careerData = [
  {
    title: 'Web Developer',
    imgSrc: `${web}`,
  },
  {
    title: 'App Developer',
    imgSrc: `${app}`,
  },
  {
    title: 'ML Engineer',
    imgSrc: `${ml}`,
  },
  {
    title: 'Digital Marketing',
    imgSrc: `${digital}`,
  },
];