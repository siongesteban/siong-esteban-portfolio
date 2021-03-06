import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './static/css/bootstrap-grid.min.css';
import './static/css/bootstrap-reboot.min.css';
import './styles/base.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
