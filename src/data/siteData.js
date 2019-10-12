const data = {
  brand: "victor nwokeocha",
  navLinks: [{
    name: "About me",
    path: "#about",
  }, {
    name: "Skills",
    path: "#skills",
  }, {
    name: "My Story",
    path: "#experience",
  }, {
    name: "Contact",
    path: "#contact",
  }],
  userInfo: {
    name: "Victor nwokeocha",
    title: "Software engineer",
    location: "Lagos, Nigeria",
    description: "I am is a technology enthusiast, passionate about learning " +
      "the trends the tech world is taking so that I can build better, " +
      "fast and efficient tools to help solve problems now, or in the future.",
    gitResume: "https://resume.github.io/?veeqtor",
    email: "nwokeochavictor@gmail.com",
    socialMediaLinks: {
      twitter: "https://twitter.com/veeqtor_",
      facebook: "https://www.facebook.com/victor.nwokeocha1",
      gitHub: "https://github.com/veeqtor",
      linkedIn: "https://www.linkedin.com/in/nwokeochavictor/",
    },
  },
  technicalSkills: [
    {
      subject: "Python/Flask", mark: 93, fullMark: 100,
    },
    {
      subject: "Python/Django", mark: 82, fullMark: 100,
    },
    {
      subject: "Javascript/Reactjs", mark: 78, fullMark: 100,
    },
    {
      subject: "Javascript/Angular", mark: 80, fullMark: 100,
    },
    {
      subject: "Html5/Css3", mark: 87, fullMark: 100,
    },
  ],
  softSkills: [
    {
      subject: "Communication", mark: 89, fullMark: 100,
    },
    {
      subject: "Professionalism", mark: 82, fullMark: 100,
    },
    {
      subject: "Integration", mark: 78, fullMark: 100,
    },
    {
      subject: "Quality", mark: 80, fullMark: 100,
    },
  ],
  careerHistory: [
    {
      year: "April 2015 - October 2015",
      title: "Technical Intern",
      company: "National Center for Energy Research and Development",
      location: "University of Nigeria, Nsukka",
      descriptions: [
        "Installed and maintained solar panels and inverters.",
        "Researched on Renewable energy",
      ],
    }, {
      year: "June 2017 - April 2018",
      title: "Technical Assistant",
      company: "Ministry of Works, Housing and Transport",
      location: "Tarauni, Kano state",
      descriptions: [
        "Maintained and repaired street lights and electrical machines",
        "Installed Street lights and electrical machines.",
        "Designed electrical wiring and fittings.",
      ],
    }, {
      year: "July 2018 - Present",
      title: "Software Engineer",
      company: "Andela",
      location: "Lagos state",
      descriptions: [
        "Contribute to the development and maintenance of in-house tools using Python/Flask, Javascript/React/NodeJs, PostgreSQL",
        "I build and maintain products for our partners with Python/Django, Javascript/Angular/Nodejs, Docker, AWS, MySQL",
        "For self-development purposes, I built a flight booking API that enables a user to make flight reservations, " +
        "and book flight tickets, using Django and Django REST framework.",
        "Continuous self-development.",
      ],
    }, {
      year: "April 2019 - Present",
      title: "Software Engineer",
      company: "Voyage Control",
      location: "London, United Kingdom",
      descriptions: [
        "I design and implement front-end and back-end logics to interpret the business needs of the platform.",
        "I designed and wrote an efficient, testable code with low-latency and high availability to integrate with an external API to meet the business needs and satisfy our users.",
        "I currently work with a team of Software Engineers to improve and maintain optimal performance on the voyage control platform using Python/Django, Javascript/Angular/Nodejs, Docker/AWS.",
      ],
    },
  ],
  academicHistory: [
    {
      year: "2005 - 2011",
      school: "Command Day Secondary School, Enugu",
      certification: "Secondary Education - O'Level (WASSCE/NECO)",
      descriptions: null,
    },
    {
      year: "2011 - 2016",
      school: "University of Nigeria, Nsukka",
      certification: "Bachelor of Engineering in Electronic Engineering",
      descriptions: [
        "Member Association of electronic engineering students. (DIGITRON).",
        "Nigerian universities engineering student’s association, UNN chapter (NUESA).",
      ],
    },
  ],
}

export default data
