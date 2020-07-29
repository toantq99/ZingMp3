import { albumActionTypes } from "../constants/albumTypes";

import { LoadingAction } from "../constants/loadingTypes";
import { Dispatch } from "react";

const setLoadingAlbum = (isLoading: boolean) => (
	dispatch: Dispatch<LoadingAction>
) => dispatch({ type: albumActionTypes.SET_LOADING_ALBUM, payload: isLoading });

export { setLoadingAlbum };
