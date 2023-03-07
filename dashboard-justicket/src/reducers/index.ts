import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  // add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
