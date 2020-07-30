import { Dispatch } from "react";
export interface LoadingAction {
	type: string;
	payload: boolean;
}

export type LoadingDispatchAction = (dispatch: Dispatch<LoadingAction>) => void;
