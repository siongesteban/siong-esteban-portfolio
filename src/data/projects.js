import peerScreenshot from '../static/images/screenshots/screenshot_peer_siong_esteban_060718.png';
import imsGridScreenshot from '../static/images/screenshots/screenshot_ims_grid_siong_esteban_060718.png';
import masterFormScreenshot from '../static/images/screenshots/screenshot_master_form_siong_esteban_060718.png';
import bingoAppScreenshot from '../static/images/screenshots/screenshot_bingo_app_siong_esteban_060718.png';

export default [{
  title: 'Peer',
  description: 'It is an offline-first dynamic Single-Page Application that uses the PWA approach. A RESTful Web Service was also built to be consumed by the client app. It uses the Material UI to give more app-like experience to the users when using with mobile.',
  techs: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
  image: peerScreenshot,
  link: {
    github: 'https://github.com/siongesteban/peer-client',
    demo: 'https://peer-io.firebaseapp.com'
  }
}, {
  title: 'IMS Grid',
  description: 'IMS Grid, where IMS stands for "Interactive Media Society" is a CMS especially built for the photography group in my college school.',
  techs: ['Bootstrap', 'jQuery', 'CodeIgniter', 'MySQL'],
  image: imsGridScreenshot,
  link: {
    github: 'https://github.com/siongesteban/ims-grid',
    demo: 'http://ims-grid.000webhostapp.com'
  }
}, {
  title: 'Master Form',
  description: 'It is a web application that I built during my internship at Wireless Access for Health, Initiative that helps the staffs to better manage, review and generate reports of health facility data.',
  techs: ['Semantic UI', 'jQuery', 'DataTables', 'Laravel', 'MySQL'],
  image: masterFormScreenshot
}, {
  title: 'Bingo App',
  description: 'Just a simple application that serves as a live-viewing of the current status of the game.',
  techs: ['Sass', 'jQuery', 'HTML5 Web Storage'],
  image: bingoAppScreenshot,
  link: {
    github: 'https://github.com/siongesteban/bingo-app'
  }
}];