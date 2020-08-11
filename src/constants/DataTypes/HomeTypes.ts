export enum MainTypes {
	Track,
	Album,
}

export interface FetchError {
	type: string;
	message: string;
	code: number;
}

export interface FetchResult<T> {
	data?: T[];
	error?: FetchError;
}

export interface FetchResultWithQuery<T> extends FetchResult<T> {
	query: string;
}
export interface FetchResultDetail<T> {
	data?: T;
	error?: FetchError;
}

export interface Action_GetList<T> {
	type: string;
	payload: FetchResult<T>;
}

export interface Action_GetListWithQuery<T> {
	type: string;
	payload: FetchResultWithQuery<T>;
}
