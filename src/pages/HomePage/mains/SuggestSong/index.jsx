import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import SongList from "../../../GlobalComponents/SongList";
import { getSuggestList } from "../../../../actions/homeAction";

export default function SuggestSong() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSuggestList("hot"));
		dispatch(getSuggestList("new"));
		return () => {};
	}, [dispatch]);
	const suggestList = useSelector((state) => state.home.suggestList);
	return (
		<Row gutter={16}>
			<Col span={12}>
				<SongList name="Nhạc việt hot" list={suggestList.hot} />
			</Col>
			<Col span={12}>
				<SongList name="Nhạc việt mới" list={suggestList.new} />
			</Col>
		</Row>
	);
}
