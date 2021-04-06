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
  resume:
    'https://drive.google.com/file/d/1UsB5PKx7akiKs9xir4nysKD3KVdK5RqQLfZJmJb0ciE/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'playseized.png',
    title: 'PlaySeized',
    info: 'Play Games and Win Limited Sneakers',
    info2: 'React/Redux/Saga/Express/Argon/Mongodb Atlas',
    url: 'http://www.playseized.com/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'homegene.png',
    title: 'Homegene',
    info: 'VR Interior Design App',
    info2: 'Angular/NestJS/Ngxs/Material/Swagger',
    url: 'https://www.homegene.space/',
    repo: '',
  },
  {
    id: nanoid(),
    img: 'clothingstop.png',
    title: 'ClothingStop',
    info: 'Responsive Clothing Ecommerce Website',
    info2: 'React/Redux/Firebase/Stripe',
    url: 'https://clothingstop.herokuapp.com/',
    repo: 'https://github.com/Lawrencehudson23/e-clothings/',
  },
  {
    id: nanoid(),
    img: 'scallopsdating.png',
    title: 'ScallopsDating',
    info: 'Dating Website with Chatting room',
    info2: 'Python/Django/Channel/Bootstrap',
    url: 'https://mighty-wave-62681.herokuapp.com/',
    repo: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me?',
  btn: 'Contact Me',
  email: 'shijieliu128@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ShijieLiu128',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/shijieliu128/',
    },
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
  isEnabled: true,
};
