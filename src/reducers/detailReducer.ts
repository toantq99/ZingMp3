import { DetailState } from "@constants/State";
import { EMPTY_TRACK_DETAIL } from "@constants/EmptyValues/Track";
import { ActionType_Detail } from "@constants/ActionTypes/DetailActions";

const initialState: DetailState = {
	song: {
		isLoading: false,
		data: EMPTY_TRACK_DETAIL,
	},
	similar: { isLoading: false },
	comments: { isLoading: false },
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ActionType_Detail.GET_TRACK_DETAIL:
			return {
				...state,
				song: {
					...state.song,
					data: action.payload.data,
					error: action.payload.error,
				},
			};
		case ActionType_Detail.SET_LOADING_TRACK_DETAIL:
			return {
				...state,
				song: {
					...state.song,
					isLoading: action.payload,
				},
			};
		case ActionType_Detail.GET_SIMILAR_SONGS:
			return {
				...state,
				similar: {
					...state.similar,
					data: action.payload.data,
					error: action.payload.error,
				},
			};
		case ActionType_Detail.SET_LOADING_SIMILAR:
			return {
				...state,
				similar: {
					...state.similar,
					isLoading: action.payload,
				},
			};
		case ActionType_Detail.GET_COMMENTS:
			return {
				...state,
				comments: {
					...state.comments,
					data: action.payload.data,
					error: action.payload.error,
				},
			};
		case ActionType_Detail.SET_LOADING_COMMENTS:
			return {
				...state,
				comments: {
					...state.comments,
					isLoading: action.payload,
				},
			};
		case ActionType_Detail.EMPTY_DETAIL:
			return initialState;
		default:
			return state;
	}
};
