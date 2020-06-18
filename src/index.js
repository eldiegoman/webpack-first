import React from 'react';
import { render } from 'react-dom';

import Home from './js/home';
import HotModuleReplacement from './utils/hotModuleReplacement';

render(<Home />, document.getElementById('container'));
//HotModuleReplacement(Home);
