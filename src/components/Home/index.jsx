import React from "react";
import { Row, Col } from "antd";
import Partner from "./Partner";
import CarouselBanner from "./CarouselBanner";
import Chart from "./Chart";
import Collection from "./Collection";
import HotArtist from "./HotArtist";
import HotTopic from "./HotTopic";
import WeekChart from "./WeekChart";
import SongList from "./SongList";
import News from "./News";

export default function Home() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={16}>
				<Row className="section">
					<Col span={24}>
						<CarouselBanner />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<Chart />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<Collection />
					</Col>
				</Row>
				<Row className="section" gutter={16}>
					<Col span={12}>
						<SongList name="nhạc việt hot" />
					</Col>
					<Col span={12}>
						<SongList name="nhạc việt mới" />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<HotArtist />
					</Col>
				</Row>
			</Col>
			<Col span={8}>
				<Row className="section">
					<Col span={24}>
						<HotTopic />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<WeekChart name="#zingchar tuần - bài hát" />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<WeekChart name="#zingchar tuần - MV" type="mv" />
					</Col>
				</Row>
				<Row className="section">
					<Col span={24}>
						<WeekChart name="#zingchar tuần - Album" type="album" />
					</Col>
				</Row>
				<Row className="section">
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
