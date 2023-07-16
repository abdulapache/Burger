import React from "react";
import ReactDom from "react-dom";
// import App from './App';
// import {Car, Audi} from './class';
// import Time from './promises';
// import Increment from './generators';
// import Fullname from './jsx';
// import Card from './props';
// import Netflixmap from './map';
// import Tick from './clock';
// import Events from './events';
// import Alert from './alert';
// import Number from './map1';
// import Burger from './burger';
import App1 from './App1';

import { BrowserRouter } from 'react-router-dom';


ReactDom .render(
    <BrowserRouter>
<App1 />
</BrowserRouter>
, document.getElementById('root')
);