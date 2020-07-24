import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import SongList from "@GlobalComponents/SongList";
import { getSuggestList } from "@actions/homeAction";

export default function SuggestSong({ query }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSuggestList(query[0]));
		dispatch(getSuggestList(query[1]));
		return () => {};
	}, [dispatch, query]);
	const suggestList = useSelector((state) => state.home.suggestList);
	return (
		<Row gutter={16}>
			<Col span={12}>
				<SongList name={query[0]} list={suggestList[query[0]]} />
			</Col>
			<Col span={12}>
				<SongList name={query[1]} list={suggestList[query[1]]} />
			</Col>
		</Row>
	);
}
