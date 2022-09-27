import portfolio from "../images/portfolio1.jpg";
import progress from "../images/workinprogress.jpg";
import tesla from "../images/tesla.jpg";
import weather from "../images/weatherapp.jpg";
import Wildfire from "../images/wildfire.jpg";

export const projects = [
  {
    id: 1,
    title: "WeatherApp",
    img: weather,
    stack: "React / Redux / Accuweather API / Sass",
    about:
      "A weather app built to show state management using redux and Api usage displaying dynamic weather data",
    link: "https://roi-malka-weather-app.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    img: portfolio,
    stack: "React / Sass / Framer Motion",
    about: "My own personal portfolio to showcase my projects and skills.",
    link: "https://www.roimalka.com",
  },
  {
    id: 3,
    title: "Tesla Clone",
    img: tesla,
    stack: "React / Styled Components",
    about: "A tesla home page clone showing Styled Components usage",
    link: "https://tesla-clone-roimalka.netlify.app",
  },
  {
    id: 4,
    title: "Wildfire-Tracker",
    img: Wildfire,
    stack: "React / Sass / NASA API / Google Maps API",
    about:
      "A small project showing wildfires around the globe using nasa and google maps api's",
    link: "https://wildfires-tracker-roimalka.netlify.app",
  },
  {
    id: 5,
    title: "Personal Trainer Studio ",
    img: progress,
    stack: "React / Sass / Framer Motion",
    about: "— on hold",
    link: "https://github.com/roimalka10/Fitness-website",
  },
];
