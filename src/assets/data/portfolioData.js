import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png";
import portfolioImg04 from "../images/portfolio-04.png";
import portfolioImg05 from "../images/portfolio-05.png";
import portfolioImg06 from "../images/portfolio-06.png";
import portfolioImg07 from "../images/portfolio-07.png";
import portfolioImg08 from "../images/portfolio-08.png";
import portfolioImg09 from "../images/portfolio-09.png";
import portfolioImg10 from "../images/portfolio-10.png";
import portfolioImg11 from "../images/portfolio-11.png";
import portfolioImg12 from "../images/portfolio-12.png";
import portfolioImg13 from "../images/portfolio-13.png";
import portfolioImg14 from "../images/portfolio-14.png";
import portfolioImg15 from "../images/portfolio-15.png";
import portfolioImg16 from "../images/portfolio-16.png";
import portfolioImg17 from "../images/portfolio-17.png";
import portfolioImg18 from "../images/portfolio-18.png";
import portfolioImg19 from "../images/portfolio-19.png";

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: 'Web Design',
    title: "Amazon Website",
    description:
      "Amazon e-Commerce website for shoping products ",
    technologies: ["Reactjs", "Tailwind css", "Fairebase","Mui"],
    siteUrl: "https://6583ed17727b0075bf888ace--spectacular-crostata-958feb.netlify.app/",
  },
  {
    id: "11",
    imgUrl: portfolioImg11,
    category: 'Web Design',
    title: "Travel Tour",
    description:
      " e-Commerce website for booking Hotels and rooms in different countries  ",
    technologies: ["Reactjs", "Tailwind css", "MongoDB","ExpressJS","JWT","NodeJS","CORS"],
    siteUrl: "https://github.com/solman500/Travel-Tour",
  },
  {
    id: "16",
    imgUrl: portfolioImg16,
    category: 'Web Design',
    title: "EnjoySpots",
    description:
      " enjoySpots website for Entertainment ",
    technologies: ["NextJs", "Tailwind css", "MongoDB","ExpressJS","JWT","NodeJS",],
    siteUrl: "https://www.enjoyspot.com/",
  },
  {
    id: "17",
    imgUrl: portfolioImg17,
    category: 'Web Design',
    title: "EnjoySpots Dashboard",
    description:
      " Admin Panel ",
    technologies: ["Reactjs", "Tailwind css", "Zustand",],
    siteUrl: "https://enjoyspot1.vercel.app/",
  },
  {
    id: "18",
    imgUrl: portfolioImg18,
    category: 'Web Design',
    title: "TODO App",
    description:
      " todo app for mange your tasks ",
    technologies: ["NextJS", "Tailwind css", "Zustand","shadcn " ,"dnd kit "],
    siteUrl: "https://todo-app-livid-alpha-52.vercel.app/",
  },
  {
    id: "19",
    imgUrl: portfolioImg19,
    category: 'Web Design',
    title: "AI Image generated ",
    description:
      " AI Image generated  ",
    technologies: ["NextJS", "Tailwind css", "AOS","shadcn " ,"react-multi-carousel "],
    siteUrl: "https://img-generate-orcin.vercel.app/",
  },
  {
    id: "12",
    imgUrl: portfolioImg12,
    category: 'Web Design',
    title: "Medical Care",
    description:
      " e-Commerce website for booking Appointment for Doctors   ",
    technologies: ["Reactjs", "Tailwind css", "MongoDB","ExpressJS","JWT","NodeJS","CORS"],
    siteUrl: "https://medical-care-tbdf.vercel.app",
  },
  {
    id: "14",
    imgUrl: portfolioImg14,
    category: "Web Design",
    title: "Aqarrat Website for appartment",
    description:
      "e-commerce website for booking appartment",
    technologies: ["NextJs", "tailwindCss","NodeJs","MongoDB","DigitalOcean","Swagger"],
    siteUrl: "https://aqarathub.com/",
  },
  
  {
    id: "10",
    imgUrl: portfolioImg10,
    category: 'Web Design',
    title: "Tasty Treat",
    description:
      "delivery website for pizza and Burger ",
    technologies: ["reactjs","NodeJs","firebase","tailwind","javascript", "bootstrap"],
    siteUrl: "https://delivery-pizza-three.vercel.app",
  },
  {
    id: "08",
    imgUrl: portfolioImg08,
    category: "Web Design",
    title: "Portfolio",
    description:
      "portfolio",
    technologies: ["React", "Tailwind css","firebase"],
    siteUrl: "https://sunny-kataifi-32b08f.netlify.app/",
  },
  {
    id: "13",
    imgUrl: portfolioImg13,
    category: 'Web Design',
    title: "Tech PlatForm",
    description:
      " e-Commerce website for booking udemy courses   ",
    technologies: ["NextJS","ReactJS", "Tailwind css", "Stripe payment","strapi backend ","Hyper ui"],
    siteUrl: "https://github.com/solman500/tech-platform/tree/main",
  },
  {
    id: "15",
    imgUrl: portfolioImg15,
    category: "Web Design",
    title: "Dashboard",
    description:
      "Dashbourd for contacting customers and controlers",
    technologies: ["reactjs", "prime","....."],
    siteUrl: "https://enjoy-spot-dashboard-front-end.vercel.app/",
  },
  {
    id: "09",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Online shopping",
    description:
      "e-commerce website for shopping ",
    technologies: ["javaScript", "html","css","bootstrap"],
    siteUrl: "https://6583f9ff215c8cc5986c9fcc--jolly-pothos-a34d6a.netlify.app/",
  },

  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Wep Design",
    title: "amazon Dashbourd",
    description:
      "amazon dashbourd for admin to do crud operation",
    technologies: ["angular", "Tailwind css", "Firebase", "Mui"],
    siteUrl: "https://github.com/solman500/Amazon-Dashboard",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Mobile App",
    title: "Amazon app",
    description:
      "Amazon app for shoping products  (e-commerce)",
    technologies: ["flutter", "Tailwind css", "firebase"],
    siteUrl: "https://github.com/solman500/Amazon-App-using-Flutter",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Web Design",
    title: "jumia e-Commerce",
    description:
      "jumia e-commerce for shoping and buy as a vendors with dashbourd admin",
    technologies: ['Wordpress','MARTFURY','dokan' ],
    siteUrl: "#",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Web Design",
    title: "KMS e-commerce",
    description:
      "kms e-commerce for shoping using ",
    technologies: ["javascript", "bootstrap","api"],
    siteUrl: "https://6583fc3d0888fbc66606ac74--mellow-eclair-131894.netlify.app/",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Web design",
    title: "HD movies",
    description:
      "HD movies website for whatching movies ",
    technologies: ["React", "Tailwind css", "firebase"],
    siteUrl: "https://github.com/solman500/MoviesWebsite-using-Reactjs-",
  },
  {
    id: "07",
    imgUrl: portfolioImg07,
    category: "Web Design",
    title: "javaGames",
    description:
      "car racing games ",
    technologies: ["javascript", "bootstrap"],
    siteUrl: "https://github.com/solman500/JavaScript-project-",
  },
]
export default portfolios;
