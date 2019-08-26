import crwnClothingScreenshot from '../static/images/screenshots/screenshot_crwn_clothing_siong_esteban_260819.png';
import peerScreenshot from '../static/images/screenshots/screenshot_peer_siong_esteban_060718.png';
import imsGridScreenshot from '../static/images/screenshots/screenshot_ims_grid_siong_esteban_060718.png';
import masterFormScreenshot from '../static/images/screenshots/screenshot_master_form_siong_esteban_060718.png';
import internPortfolioScreenshot from '../static/images/screenshots/screenshot_intern_portfolio_siong_esteban_260819.png';
import bingoAppScreenshot from '../static/images/screenshots/screenshot_bingo_app_siong_esteban_060918.png';
import klikScreenshot from '../static/images/screenshots/screenshot_klik_siong_esteban_060918.png';

export default [
  {
    title: 'CRWN Clothing',
    description:
      'A simple E-commerce app with payment powered by Stripe, built with React and written in TypeScript.',
    techs: [
      'TypeScript',
      'React',
      'Redux',
      'Redux Saga',
      'Reselect',
      'Styled Components',
      'Node.js',
      'Express',
      'Stripe',
      'Firebase Authentication',
      'Firebase Firestore',
    ],
    image: crwnClothingScreenshot,
    link: {
      github: 'https://github.com/siongesteban/crwn-clothing-client',
      demo: 'https://crwn-clothing-se05.firebaseapp.com/',
    },
  },
  {
    title: 'Peer',
    description:
      'An offline-first dynamic Single-Page Application that follows the PWA approach. A RESTful API was also built to be consumed by the client app. It uses the Material UI to give more app-like experience to the users when using with mobile.',
    techs: [
      'React',
      'Redux',
      'Redux Thunk',
      'Material UI',
      'Redux Form',
      'Node.js',
      'Express',
      'MongoDB',
    ],
    image: peerScreenshot,
    link: {
      github: 'https://github.com/siongesteban/peer-client',
      demo: 'https://peer-io.firebaseapp.com',
    },
  },
  {
    title: 'IMS Grid',
    description:
      'IMS Grid, where IMS stands for "Interactive Media Society" is a CMS especially built for the photography group in my college school.',
    techs: ['Bootstrap', 'jQuery', 'CodeIgniter', 'MySQL'],
    image: imsGridScreenshot,
    link: {
      github: 'https://github.com/siongesteban/ims-grid',
    },
  },
  {
    title: 'Master Form',
    description:
      'A platform that helps WAH (Wireless Access for Health) staffs to better manage, review and generate reports of complex data sets from different health facilities across the Philippines, with a user-friendly UI, beautiful forms, flexible data tables and data summaries.',
    techs: ['Semantic UI', 'jQuery', 'DataTables', 'Laravel', 'MySQL'],
    image: masterFormScreenshot,
  },
  {
    title: 'Intern Portfolio',
    description: 'My previous portfolio website.',
    techs: ['Bootstrap', 'Sass', 'jQuery'],
    image: internPortfolioScreenshot,
    link: {
      github: 'https://github.com/siongesteban/bingo-app',
      demo: 'https://bingo-app-060818.firebaseapp.com/',
    },
  },
  {
    title: 'Bingo App',
    description:
      'A simple application that serves as a live-viewing of the current status of the game.',
    techs: ['Sass', 'jQuery', 'HTML5 Web Storage'],
    image: bingoAppScreenshot,
    link: {
      github: 'https://github.com/siongesteban/siong-esteban-intern-portfolio',
      demo: 'https://siongesteban-se05.firebaseapp.com/',
    },
  },
  {
    title: 'Klik',
    description:
      'Klik is a mini game where you will need to tap a block that moves to random directions as many times as you can in a minute. It has three difficulties, the harder, the faster the block moves.',
    techs: ['CSS', 'jQuery', 'ASP.Net MVC 5'],
    image: klikScreenshot,
    link: {
      github: 'https://github.com/siongesteban/klik',
    },
  },
];
