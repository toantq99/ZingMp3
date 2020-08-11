export type FavItem = number;
export type FavList = number[];

export interface Action_UpdateFavList {
	type: string;
	payload: FavItem;
}

export interface Action_GetFavListStorage {
	type: string;
	payload: FavList;
}
