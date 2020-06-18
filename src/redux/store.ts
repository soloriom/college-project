import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { createLogger } from 'redux-logger';


const logger = createLogger({ collapsed: true, diff: true, duration: true });


export const store = createStore(reducers,applyMiddleware(thunk, logger));
