import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/homepage.css';
import Background from './functions/background';
import Name from './functions/name';
import Compteur from './functions/compteur';

import * as serviceWorker from './serviceWorker';


const html=(
  <div className="contenu">
    <Background/>
    <Name name="Laura"/>
    <div className="compteur">
    <Compteur/>
    </div>
  </div>
)

ReactDOM.render(
  html,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
