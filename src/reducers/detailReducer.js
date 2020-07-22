import { detailActionTypes } from "../actions/types";

const initialState = {
	song: null,
	similar: null,
	comments: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case detailActionTypes.GET_SONG_DETAIL:
			return { ...state, song: action.payload };
		case detailActionTypes.GET_SIMILAR_SONG:
			return { ...state, similar: action.payload };
		case detailActionTypes.GET_COMMENTS:
			return { ...state, comments: action.payload };
		default:
			return state;
	}
};
