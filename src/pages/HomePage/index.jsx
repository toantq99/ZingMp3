import React from "react";
import { Row, Col } from "antd";
import CarouselBanner from "./dumps/CarouselBanner";
import Chart from "./mains/Chart";
import Collection from "./mains/Collection";
import SuggestSong from "./mains/SuggestSong";
import WeekChart from "./mains/WeekChart";
import HotArtist from "./components/HotArtist";
import HotTopic from "./components/HotTopic";
import News from "./components/News";
import Partner from "./dumps/Partner";

export default function HomePage() {
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
						<Collection name="Yêu" query="Love" limit={8} />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<Collection name="Adele" query="Adele" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<Collection name="Taylor Swift" query="Taylor Swift" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<SuggestSong />
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
						<WeekChart
							name="#zingchar tuần - bài hát"
							type="song"
							query="baby"
						/>
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<WeekChart name="#zingchar tuần - MV" type="mv" query="sekai" />
					</Col>
				</Row>
				<Row gutter={[20, 30]}>
					<Col span={24}>
						<WeekChart
							name="#zingchar tuần - Album"
							type="album"
							query="city"
						/>
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
