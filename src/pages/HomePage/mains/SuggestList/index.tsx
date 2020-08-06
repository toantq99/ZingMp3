// Libs
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Components
import withLoading from "@HOCs/withLoading";
import SongList from "@GlobalComponents/mains/SongList";
// Types
import { RootState } from "@constants/state";
// Actions
import { getSuggestList } from "@actions/homeAction";
// SCSS
import "./style.scss";
// Mocks
const queryList = ["aimyon", "yonezu kenshi"];

const SuggestList: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSuggestList(queryList));
	}, [dispatch]);

	const suggestList = useSelector((state: RootState) => state.home.suggestList);
	const { isLoading = false } = suggestList;
	return withLoading(isLoading)(
		<div className="suggest-list-wrapper">
			{queryList.map((query, id) => (
				<SongList key={id} name={query} list={suggestList[query] || []} />
			))}
		</div>
	);
};
export default SuggestList;
