import {combineReducers} from 'redux';
import authReducer from './auth';
import { currentUserReducer } from './currentUser';
import { askQuestionReducer } from './askQuestion';
import { usersReducer } from './users';

export default combineReducers({
    authReducer,currentUserReducer,askQuestionReducer,usersReducer
})
