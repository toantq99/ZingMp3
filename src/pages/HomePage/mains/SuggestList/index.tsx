// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withFetching from "@HOCs/withFetching";
import SongList from "@GlobalComponents/mains/SongList";
// Types
import { RootState } from "@constants/State";
// Actions
import { getSuggestList } from "@actions/HomeAction";
// SCSS
import "./style.scss";
// Mocks
const queryList = ["aimyon", "yonezu kenshi"];

const SuggestList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		queryList.map((query) => dispatch(getSuggestList(query)));
	}, [dispatch]);

	const suggestList = useSelector((state: RootState) => state.home.suggestList);
	return (
		<div className="suggest-list-wrapper">
			{queryList.map((query, id) => {
				const { isLoading = true, error, data = [] } = suggestList[query] || {};
				return withFetching({ isLoading, error, title: query, key: id })(
					<SongList key={id} name={query} list={data} />
				);
			})}
		</div>
	);
};
export default SuggestList;
