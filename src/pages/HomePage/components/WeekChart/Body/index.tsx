import React from "react";
import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import AlbumItem from "../AlbumItem";
import { SongDetail } from "@constants/types/songDetailTypes";
import { Album } from "@constants/types/albumTypes";
import { WeekChartType } from "@HomePage/mains/WeekChartList";

interface Props {
	list: (SongDetail | Album)[];
	type: number;
}

const Body: React.FC<Props> = ({ list, type }) => {
	return (
		<Row>
			{type === WeekChartType.Album
				? list.map((item, id) => (
						<Col span={24} key={id}>
							<AlbumItem rank={id + 2} item={item as Album} />
						</Col>
				  ))
				: list.map((item, id) => (
						<Col span={24} key={id}>
							<MusicItem rank={id + 2} item={item as SongDetail} />
						</Col>
				  ))}
		</Row>
	);
};
export default Body;
