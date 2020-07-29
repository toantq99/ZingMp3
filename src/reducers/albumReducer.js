import { albumActionTypes } from "../actions/types";

const initialState = {
	isLoading: false,
	detail: { artist: {}, tracks: { data: [{}] } },
};

export default (state = initialState, action) => {
	switch (action.type) {
		case albumActionTypes.GET_ALBUM_DETAIL:
			return { ...state, detail: action.payload };
		case albumActionTypes.SET_LOADING_ALBUM:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
