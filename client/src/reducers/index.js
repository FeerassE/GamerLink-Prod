import { combineReducers } from 'redux';

import UsersReducer from './reducer_users';
import CurrentUserReducer from './reducer_currentUser';

const rootReducer = combineReducers({
    users: UsersReducer,
    currentUser: CurrentUserReducer,
});

export default rootReducer;