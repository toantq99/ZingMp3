import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SongList from "@GlobalComponents/SongList";
import { getSuggestList } from "@actions/homeAction";
import withLoading from "@HOCs/withLoading";
import "./style.scss";

const queryList = ["aimyon", "yonezu kenshi"];

export default function SuggestList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSuggestList(queryList));
	}, [dispatch]);

	const suggestList = useSelector((state) => state.home.suggestList);
	const { isLoading = false } = suggestList;
	return withLoading(isLoading)(
		<div className="suggest-list-wrapper">
			<SongList name={queryList[0]} list={suggestList[queryList[0]] || []} />
			<SongList name={queryList[1]} list={suggestList[queryList[1]] || []} />
		</div>
	);
}
