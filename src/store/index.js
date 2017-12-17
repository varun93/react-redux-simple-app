import {createStore,applyMiddleware} from 'redux';
import playerReducer from '../reducers/player';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [];

middlewares.push(thunk);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = createStore(playerReducer,applyMiddleware(...middlewares));

export default store;