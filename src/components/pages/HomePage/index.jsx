import React, { useEffect } from "react";
import { Row, Col, Spin } from "antd";
import CarouselBanner from "./CarouselBanner";
import Chart from "./Chart";
import Collection from "./Collection";
import SongList from "./SongList";
import HotArtist from "./HotArtist";
import HotTopic from "./HotTopic";
import WeekChart from "./WeekChart";
import News from "./News";
import Partner from "./Partner";

import { useDispatch, useSelector } from "react-redux";
import { getMusicList } from "../../../actions/musicListAction";

export default function HomePage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMusicList("aimyon"));
		return () => {};
	}, [dispatch]);
	const list = useSelector((state) => state.musicList) || [];

	return (
		<Row gutter={[16, 30]}>
			<Col span={16}>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<CarouselBanner />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<Chart />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<Collection />
					</Col>
				</Row>
				<Row gutter={[16, 30]}>
					<Col span={12}>
						{list.length ? (
							<SongList name="nhạc việt hot" list={list} />
						) : (
							<Spin />
						)}
					</Col>
					<Col span={12}>
						{list.length ? (
							<SongList name="nhạc việt mới" list={list} />
						) : (
							<Spin />
						)}
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<HotArtist />
					</Col>
				</Row>
			</Col>
			<Col span={8}>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<HotTopic />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<WeekChart name="#zingchar tuần - bài hát" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<WeekChart name="#zingchar tuần - MV" type="mv" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<WeekChart name="#zingchar tuần - Album" type="album" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<News />
					</Col>
				</Row>
			</Col>
			<Col span={24}>
				<Partner />
			</Col>
		</Row>
	);
}
