import portfolio from "../images/portfolio1.jpg";
import progress from "../images/workinprogress.jpg";
import tesla from "../images/tesla.jpg";
import weather from "../images/weatherapp.jpg";
import weatherNew from "../images/weathernew.png";
import wildfire from "../images/wildfire.jpg";
import portfolio2022 from "../images/portfolio2022.jpg";
import portfolio2022New from "../images/portfolio2022New.jpg";
import calculator from "../images/calculator.jpg";
import laptoptrainer from "../images/laptoptrainer.jpg";
import tabletport2021 from "../images/tabletport2021.jpg";

export const projects = [
  {
    id: 1,
    title: "WeatherApp",
    img: weather,
    stack: "React / Redux / Accuweather API / Sass",
    about:
      "A weather app built to show state management using redux and Api usage displaying dynamic weather data.",
    link: "https://roi-malka-weather-app.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio - 2022",
    img: portfolio2022,
    stack: "React / CSS / Axios / Framer Motion",
    about:
      "New and improved version of my portfolio, showing better design, code and UI/UX skills.",
    link: "https://www.roimalka.com",
  },
  // {
  //   id: 3,
  //   title: "Wildfire-Tracker",
  //   img: wildfire,
  //   stack: "React / Sass / NASA API / Google Maps API",
  //   about:
  //     "A small project showing wildfires around the globe using multiple apis.",
  //   link: "https://wildfires-tracker-roimalka.netlify.app",
  // },
  {
    id: 3,
    title: "Calculator",
    img: calculator,
    stack: "HTML / CSS / JS",
    about: "A basic calculator app made when I first started coding.",
    link: "https://roimalka-calculator.netlify.app/",
  },
  {
    id: 4,
    title: "Portfolio - 2021",
    img: tabletport2021,
    stack: "React / Sass / Framer Motion",
    about:
      "My personal portfolio created in 2021 to showcase my projects and skills.",
    link: "https://roimalkaportfolio-2021.netlify.app/",
  },
  {
    id: 5,
    title: "Tesla Clone",
    img: tesla,
    stack: "React / Styled Components",
    about: "A tesla home page clone showing Styled Components usage.",
    link: "https://tesla-clone-roimalka.netlify.app",
  },
  {
    id: 6,
    title: "Personal Trainer Studio ",
    img: laptoptrainer,
    stack: "React / Sass / Framer Motion",
    about: "— on hold.",
    link: "https://github.com/roimalka10/Fitness-website",
  },
];
