import types from "../actions/types";

const initialState = {
	song: null,
	similar: null,
	comments: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_MUSIC_DETAIL:
			return { ...state, song: action.payload };
		case types.GET_SIMILAR_SONG:
			return { ...state, similar: action.payload };
		case types.GET_COMMENTS:
			return { ...state, comments: action.payload };
		default:
			return state;
	}
};
