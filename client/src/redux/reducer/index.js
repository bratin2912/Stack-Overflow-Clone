import {combineReducers} from 'redux';
import authReducer from './auth';
import { currentUserReducer } from './currentUser';
import { askQuestionReducer } from './askQuestion';
export default combineReducers({
    authReducer,currentUserReducer,askQuestionReducer
})
