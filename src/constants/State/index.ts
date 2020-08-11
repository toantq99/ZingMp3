// DataTypes
import {
	FetchError,
	FetchResult,
	FetchResultDetail,
} from "@constants/DataTypes/HomeTypes";
import { TrackDetail, Artist, Comment } from "@constants/DataTypes/TrackTypes";
import { Album, AlbumDetail } from "@constants/DataTypes/AlbumTypes";
import { FavList } from "@constants/DataTypes/FavListTypes";
import { User } from "@constants/DataTypes/AuthTypes";

export interface RootState {
	home: HomeState;
	detail: DetailState;
	search: SearchState;
	album: AlbumState;
	favList: FavListState;
	auth: AuthState;
}

export interface IFetchAndLoadingDetail<T> extends FetchResultDetail<T> {
	isLoading: boolean;
}
export interface IFetchAndLoading<T> extends FetchResult<T> {
	isLoading: boolean;
}

export interface AlbumState extends IFetchAndLoadingDetail<AlbumDetail> {}

export interface HomeState {
	suggestList: {
		[key: string]: IFetchAndLoading<TrackDetail>;
	};
	collection: {
		[key: string]: IFetchAndLoading<TrackDetail>;
	};
	trackChart: IFetchAndLoading<TrackDetail>;
	artistChart: IFetchAndLoading<Artist>;
	weekChart: {
		albums: IFetchAndLoading<Album>;
		tracks: IFetchAndLoading<TrackDetail>;
	};
}

export interface SearchState {
	isLoading: boolean;
	searchResult: {
		data: TrackDetail[];
		total: number;
	};
	error?: FetchError;
}

export interface DetailState {
	song: IFetchAndLoadingDetail<TrackDetail>;
	similar: IFetchAndLoading<TrackDetail>;
	comments: IFetchAndLoading<Comment>;
}
export interface FavListState extends FavList {}

export interface AuthState {
	isLoading: boolean;
	isLoadingStorage: boolean;
	user?: User;
	token?: string;
	erorr?: { message: string };
}
