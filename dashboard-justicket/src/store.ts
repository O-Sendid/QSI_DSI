import { createStore, applyMiddleware, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const logger: Middleware = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
