/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luis Campos",
  title: "¡Hola! Soy Luis Campos",
  subTitle: emoji(
    "Un apasionado desarrollador de software Full Stack 🚀 con experiencia en la creación de aplicaciones web y móviles con JavaScript / Next.js / React.js / Node.js / React Native y algunos otros frameworks y lenguajes de programación."
  ),
  resumeLink:
    "http://localhost:3000/#experience", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CarlosCamposRodriguez99",
  whatsapp: "https://www.whatsapp.com",
  instagram: "https://www.instagram.com",
  gmail: "lacamposrz@gmail.com",
  facebook: "https://www.facebook.com/luis.campos",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tecnologías que uso",
  subTitle: "Algunas tecnologías emergentes",
  skills: [
    emoji(
      "⚡ Desarrollo interfaces de usuario / front-end altamente interactivas para sus aplicaciones web y móviles"
    ),
    emoji("⚡ Aplicaciones web progresivas (PWA) en pilas normales y SPA"),
    emoji(
      "⚡ Integración de servicios de terceros como Firebase / Firestore / AWS / MongoDB / MySQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "shopify",
      fontAwesomeClassname: "fab fa-shopify"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad de Guadalajara",
      logo: require("./assets/images/udg.png"),
      subHeader: "Bachillerato - Universidad de Guadalajara",
      duration: "Marzo 2017 - Octubre 2019",
      desc: "Certificado con carrera técnica en Programación Web",
      descBullets: [
        "Aquí fué donde empezó el interés a esta industría"
      ]
    },
    {
      schoolName: "Gaiasoft Company",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Freelancer by Gaiasoft",
      duration: "Noviembre 2019 - Present",
      desc: "Trabajamos desarrollando ecommerce para clientes que quieren llevar su negoció a la web, así como diferentes aplicaciones web tanto para el ambiente móvil, tablet y computadoras.",
      descBullets: ["Información del contacto Luis Campos cel: 333130835 "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "React",
      companylogo: require("./assets/images/react.png"),
      date: "May 2019 – Present",
      desc: "React (también llamada React.js o ReactJS) es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."
    },
    {
      role: "Software Developer",
      company: "JavaScript",
      companylogo: require("./assets/images/js.png"),
      date: "May 2019 – Present",
      desc: "JavaScript es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript)."
    },
    {
      role: "Backend Developer",
      company: "GraphQL",
      companylogo: require("./assets/images/graphql.png"),
      date: "May 2019 – Present",
      desc: "GraphQL es un lenguaje de consulta y manipulación de datos para APIs, y un entorno de ejecución para realizar consultas con datos existentes."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos",
  subtitle: "Algunas startups y aplicaciones que he desarrollado",
  projects: [
    {
      image: require("./assets/images/houses.svg"),
      projectName: "Startup Real State",
      projectDesc: "WebSite para industría de bienes raíces, donde se exponen diferentes propiedades con cada categoría diferente, hecha el frontend con Gatsby, backend con Strapi y deployment con Netlify.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bienesraicesdeploy.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/finanza.svg"),
      projectName: "Budget App",
      projectDesc: "Consiste en una app que te permite controlar tu presupuesto breviamente establecido, aplicación hecha con react-vite con deployment en Vercel y Netlify.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dancing-cassata-4f2d1b.netlify.app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecommerce.svg"),
      projectName: "Ecommerce",
      projectDesc: "Tienda en linea para un cliente donde estan diferentes funciones importantes como métodos de pago, buscador, páginas, seguridad en el envió del producto así como la compra de esta, carrito y traductor depende el país de orígen; así como su propio diseño de la marca inspirada en venta de plantas, semillas y productos para jardín.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ap-ocshop.myshopify.com"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bitcoin.svg"),
      projectName: "Crypto Cotizador",
      projectDesc: "Aplicación donde nos permite ver el valor de las criptomonedas más importantes al momento, integrando una API, donde hay diferentes tipos de moneda nacionales e internacionales, hecha con React y deployment en Vercel.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://criptomonedas-nu.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "+52 3331308335, Guadalajara, Jalisco, México",
  number: "+52 3331308335",
  email_address: "lacamposrz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
