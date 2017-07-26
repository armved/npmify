import { combineReducers } from 'redux';
import packageReducer from './packageReducer';

const rootReducer = combineReducers({
  packages: packageReducer,
});

export default rootReducer;
