import { Dispatch } from "react";

export interface Action_Loading {
	type: string;
	payload: boolean;
}

export interface Action_LoadingWithQuery {
	type: string;
	payload: { isLoading: boolean; query: string };
}

export type Dispatch_Loading = (
	dispatch: Dispatch<Action_Loading | Action_LoadingWithQuery>
) => void;
