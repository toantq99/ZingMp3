import types from "./types";

export const addFav = (id) => (dispatch) => {
	dispatch({
		type: types.ADD_FAV,
		payload: id,
	});
};

export const removeFav = (id) => (dispatch) => {
	dispatch({
		type: types.REMOVE_FAV,
		payload: id,
	});
};
