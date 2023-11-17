import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import reducer from './Store/reducer';
import resultReducer from './Store/reducer/result';
import counterReducer from './Store/reducer/counter';

// const store = createStore(reducer);

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
