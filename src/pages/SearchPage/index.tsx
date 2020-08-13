// Libs
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import PaginateBot from "./mains/PaginateBot";
import PaginateAside from "./mains/PaginateAside";
import SongList from "@GlobalComponents/mains/SongList";
// Actions
import { searchSong, emptySearch } from "@actions/SearchAction";
// Types
import { RootState } from "@constants/State";
// SCSS
import "./style.scss";

interface Props {
	location: {
		search: string;
	};
}

const SearchPage: React.FC<Props> = ({ location }) => {
	const dispatch = useDispatch();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query") || "";
	const page = parseInt(searchParams.get("page") || "") || 1;
	const pageSize = parseInt(searchParams.get("limit") || "") || 20;
	useEffect(() => {
		dispatch(searchSong(query, page, pageSize));
		return () => {
			dispatch(emptySearch());
		};
	}, [dispatch, query, page, pageSize]);

	const { isLoading = true, searchResult, error } = useSelector(
		(state: RootState) => state.search
	);

	return withFetching({ isLoading, error })(
		<div className="search-page-wrapper">
			<div className="left">
				<SongList
					name={`${(page - 1) * pageSize + 1}-${
						page * pageSize < searchResult.total
							? page * pageSize
							: searchResult.total
					}/${searchResult.total} kết quả tìm kiếm cho ${query}`}
					list={searchResult.data || []}
					size="large"
				/>
				<PaginateBot
					{...{
						total: searchResult.total,
						page,
						pageSize,
						query,
					}}
				/>
			</div>
			<div className="right">
				<PaginateAside
					{...{
						total: searchResult.total,
						page,
						pageSize,
						query,
					}}
				/>
			</div>
		</div>
	);
};
export default SearchPage;
