//portfolio
import hostel from "../assets/Portfolio/hostel.jpg";
import health from "../assets/Portfolio/health.jpg";
import festival from "../assets/Portfolio/festival.jpg";
import rescue from "../assets/Portfolio/rescue.jpg";
import baizu from "../assets/Portfolio/baizu.jpg";
import sexeducation from '../assets/Portfolio/sexeducation.jpg'


//teams
import aneek from "../assets/Team/Aneek.jpg";
import puja from "../assets/Team/Puja.jpg";
import simpy from "../assets/Team/simpy.jpg";
import sahel from "../assets/Team/Sahel.jpg";
import priya from "../assets/Team/Priya.jpg";
import khushi from "../assets/Team/Khushi.jpg";
import asham from "../assets/Team/Asham.jpg";
import omkar from "../assets/Team/Omkar.jpg";
import priyanshu from "../assets/Team/Priyanshu.jpg";
import srijita from "../assets/Team/Srijita.jpg";
import kritika from "../assets/Team/kritika.jpg";
import ayush from "../assets/Team/Ayush.jpg";
import rishav from "../assets/Team/rishav.jpg";
import harshika from "../assets/Team/harshika.jpg";
import ahan from '../assets/Team/ahan.jpg';
import partha from '../assets/Team/partha.jpg'

//gallery
import dinner from "../assets/Gallery/dinner.jpg";
import oak1 from "../assets/Gallery/oak1.jpg";
import sharecab from "../assets/Gallery/sharecabz.jpg";
import oak2 from "../assets/Gallery/oak2.jpg";
import itc from "../assets/Gallery/itc.jpg";

//career
import web from "../assets/Career/web.png";
import app from "../assets/Career/app.png";
import ml from "../assets/Career/ml.png";
import digital from "../assets/Career/digital.png";

export const portfolioData = [
  {
    title: "Hostel Booking System",
    description: "Designed full stack web application for room booking of a hostel chain company",
    imageUrl: `${hostel}`,
    link: '/none'
  },
  {
    title: "Health Risk Assesment System",
    description: "Developed a system to assesses the health risks associated with diabetes and hypertension",
    imageUrl: `${health}`,
    link: '/none'
  },
  {
    title: "Festiwah",
    description: "Created social media for connecting people during festivals",
    imageUrl: `${festival}`,
    link: '/none'
  },
  {
    title: "Rescue Ride",
    description: "Developed an ambulance booking system for emergency ride",
    imageUrl: `${rescue}`,
    link: '/none'
  },
  {
    title: "Teenwise",
    description: "Developed a website to provide sex education to students",
    imageUrl: `${sexeducation}`,
    link: 'https://teenwise.vercel.app/'
  },
  {
    title: "Baizus Hotel",
    description: "Designed an app and increased app engagement for a hotel-chain company",
    imageUrl: `${baizu}`,
    link: '/none'
  },
];

export const teamData = [
  {
    imgUrl: `${aneek}`,
    name: "ANEEK MAJUMDAR",
    role: "Chief Executive Officer",
  },
  {
    imgUrl: `${puja}`,
    name: "PUJA MONDAL",
    role: "HR Manager, Front-End Developer",
  },
  {
    imgUrl: `${simpy}`,
    name: "SIMPY KUMARI NONIA",
    role: "Full-Stack Developer",
  },
  {
    imgUrl: `${sahel}`,
    name: "SAHEL BEJ",
    role: "Data Scientist",
  },
  {
    imgUrl: `${kritika}`,
    name: "KRITIKA DAS",
    role: "ML Engineer",
  },
  {
    imgUrl: `${priya}`,
    name: "PRIYA ROY",
    role: "Front-End Developer Intern",
  },
  {
    imgUrl: `${khushi}`,
    name: "KHUSHI JAISWAL",
    role: "Front-End Developer Intern",
  },
  {
    imgUrl: `${asham}`,
    name: "MD. ASHAM IMAD",
    role: "Full-Stack Developer Intern",
  },
  {
    imgUrl: `${omkar}`,
    name: "OMKAR ABHISHEK JHA",
    role: "Front-End Developer Intern",
  },
  {
    imgUrl: `${harshika}`,
    name: "HARSHIKA SINGH",
    role: "UI/UX Designer, Front-End Developer Intern",
  },
  {
    imgUrl: `${ayush}`,
    name: "AAYUSH KUMAR",
    role: "Full-Stack Developer Intern",
  },
  {
    imgUrl: `${priyanshu}`,
    name: "PRIYANSHU DEY",
    role: "Backend Developer Intern",
  },
  {
    imgUrl: `${srijita}`,
    name: "SRIJITA DAS",
    role: "Backend Developer Intern",
  },
  {
    imgUrl: `${rishav}`,
    name: "RISHAV MUKHERJEE",
    role: "App Developer Intern",
  },
  {
    imgUrl: `${ahan}`,
    name: 'AHAN GHOSH',
    role: 'Backend Developer Intern'
  },
  {
    imgUrl: `${partha}`,
    name: 'PARTHABRATA GANGULY',
    role: 'DevOps Intern'
  }
];

export const services = [
  {
    title: "Training",
    description:
      "Tailored technology solutions to optimize your business operations.",
    icon: "🛠️", // Use your preferred icon or image here
  },
  {
    title: "IT Solutions",
    description: "Expert-led programs to enhance your skills and knowledge.",
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic campaigns to boost your online presence and engagement!",
    icon: "📈",
  },
];

export const galleryData = [
  {
    src: `${dinner}`,
    alt: "Image 1",
  },
  {
    src: `${itc}`,
    alt: "Image 2",
  },
  {
    src: `${oak2}`,
    alt: "Image 3",
  },
  {
    src: `${oak1}`,
    alt: "Image 4",
  },
  {
    src: `${sharecab}`,
    alt: "Image 5",
  },
  // {
  //   src: `${img6}`,
  //   alt: 'Image 6',
  // },
];

export const careerData = [
  {
    title: "Web Developer",
    imgSrc: `${web}`,
  },
  {
    title: "App Developer",
    imgSrc: `${app}`,
  },
  {
    title: "ML Engineer",
    imgSrc: `${ml}`,
  },
  {
    title: "Digital Marketing",
    imgSrc: `${digital}`,
  },
];

export const monthData = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];
