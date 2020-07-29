import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shijie | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Shijie Liu',
  subtitle: "I'm a Full Stack Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'shijie.jpg',
  paragraphOne: 'I love Design, Technology, and Story.',
  paragraphTwo:
    'I am a Developer with enthusiasm and focus on both Frontend and Backend Development.',
  paragraphThree:
    'I am passionate about building scalable software, creating effective solutions, and learning every day to grow professionally in the IT field.',
  paragraphFourth: 'Feel free to contact me via email at any time.',
  resume: 'https://drive.google.com/file/d/1d-ahME2B1j7e256jO_gOceX7y-s_9Nqh/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'clothingstop.png',
    title: 'ClothingStop',
    info: 'Responsive clothing ecommerce website',
    info2: 'react/redux/firebase/stripe',
    url: 'https://clothingstop.herokuapp.com/',
    repo: 'https://github.com/Lawrencehudson23/e-clothings',
  },
  {
    id: nanoid(),
    img: 'chamel.png',
    title: 'Chamel',
    info: 'Responsive Luxury Brand inspired website',
    info2: 'react/redux/ant design/less',
    url: 'https://chamel.netlify.app/',
    repo: 'https://github.com/Lawrencehudson23/chamel',
  },
  {
    id: nanoid(),
    img: 'phantoscope.png',
    title: 'Phantoscope',
    info: 'Responsive home decor website',
    info2: 'react/redux/bootstrap/sass',
    url: '',
    repo: 'https://github.com/Lawrencehudson23/phantoscope',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to collaborate with me?',
  btn: 'Say Hello',
  email: 'shijieliu128@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shijieliu128/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Lawrencehudson23',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
