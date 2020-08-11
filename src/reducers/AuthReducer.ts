import { AuthState } from "@constants/State";
import { ActionType_Auth } from "@constants/ActionTypes/AuthActions";

const initialState: AuthState = {
	isLoading: false,
	isLoadingStorage: false,
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ActionType_Auth.LOGIN:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				error: action.payload.error,
			};
		case ActionType_Auth.SET_LOADING_LOGIN:
			return { ...state, isLoading: action.payload };
		case ActionType_Auth.SET_LOADING_STORAGE:
			return { ...state, isLoadingStorage: action.payload };
		case ActionType_Auth.LOGOUT:
			return initialState;
		default:
			return state;
	}
};
