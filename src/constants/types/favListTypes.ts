export const favActionTypes = {
	ADD_FAV: "ADD_FAV",
	REMOVE_FAV: "REMOVE_FAV",
	GET_FAV: "GET_FAV",
	GET_FAV_STORAGE: "GET_FAV_STORAGE",
};

export interface FavListAction {
	type: string;
	payload: string;
}
export type FavList = string[];
