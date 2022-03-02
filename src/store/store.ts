import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/user.reducer';
import signUp from './reducers/signUp.reducer';
import updateUser from './reducers/updateUser.reducer';
import profileUser from './reducers/profileInfo.reducer';
import tweets from './reducers/tweets.reducer';
import comments from './reducers/comments.reducer';

const rootReducer = combineReducers({
	signUp,
	user,
	updateUser,
	profileUser,
	tweets,
	comments,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
