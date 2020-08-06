// Libs
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// Components
import withLoading from "@HOCs/withLoading";
import PaginateBot from "./mains/PaginateBot";
import PaginateAside from "./mains/PaginateAside";
import SongList from "@GlobalComponents/mains/SongList";
// Actions
import { searchSong, emptySearch } from "@actions/searchAction";
// Types
import { RootState } from "@constants/state";
// SCSS
import "./style.scss";

interface Props {
	location: {
		search: string;
	};
}

const SearchPage: React.FC<Props> = ({ location }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const searchParams = new URLSearchParams(location.search);
	const query = searchParams.get("query") || "";
	const page = parseInt(searchParams.get("page") || "");
	const pageSize = parseInt(searchParams.get("limit") || "");
	useEffect(() => {
		dispatch(searchSong(query, page, pageSize));
		return () => {
			dispatch(emptySearch());
		};
	}, [dispatch, query, page, pageSize]);

	const { isLoading, data } = useSelector((state: RootState) => state.search);

	const pageChangeHandler = (
		_query: string,
		_pageToGo: number,
		_pageSize: number = pageSize
	) => {
		history.push(
			`/tim-kiem/?query=${_query}&page=${_pageToGo}&limit=${_pageSize}`
		);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return withLoading(isLoading)(
		<div className="search-page-wrapper">
			<div className="left">
				<SongList
					name={`${(page - 1) * pageSize + 1}-${
						page * pageSize < data.total ? page * pageSize : data.total
					}/${data.total} kết quả tìm kiếm cho ${query}`}
					list={data.data || []}
					size="large"
				/>
				<PaginateBot
					{...{ total: data.total, page, pageSize, query, pageChangeHandler }}
				/>
			</div>
			<div className="right">
				<PaginateAside
					{...{ total: data.total, page, pageSize, query, pageChangeHandler }}
				/>
			</div>
		</div>
	);
};
export default SearchPage;
