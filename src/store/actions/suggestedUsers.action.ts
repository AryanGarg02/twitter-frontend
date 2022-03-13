import {
	suggestedUsersAction,
	suggestedUsersActionTypes,
} from '../../interfaces/store/suggestedUsers.store.types';
import axios from '../../config/axios';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const getSuggestedUsersStart = (): suggestedUsersAction => ({
	type: suggestedUsersActionTypes.SUGGESTED_USERS_START,
});

const getSuggestedUsersSuccess = (suggestedUsers: any): suggestedUsersAction => ({
	type: suggestedUsersActionTypes.SUGGESTED_USERS_SUCCESS,
	payload: suggestedUsers,
});

const getSuggestedUsersFailure = (error: any): suggestedUsersAction => ({
	type: suggestedUsersActionTypes.SUGGESTED_USERS_FAILURE,
	payload: error,
});

export const getSuggestedUsers = (limit: number, page: number) => async (dispatch: any) => {
	dispatch(getSuggestedUsersStart());
	const userId = Cookies.get('user_Id');
	try {
		const response = await axios.get(`user/suggestedUsers/${userId}?page=${page}&limit=${limit}`);
		const data = await response.data;
		dispatch(getSuggestedUsersSuccess(data.users));
		return true;
	} catch (error) {
		dispatch(getSuggestedUsersFailure(error));
		return false;
	}
};