import React from "react";
import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import MvItem from "../MvItem";
import AlbumItem from "../AlbumItem";

export default function Body({ type, list }) {
	return (
		<Row>
			{type === "mv"
				? list.map((item, id) => (
						<Col span={24} key={id}>
							<MvItem rank={id + 2} item={item} />
						</Col>
				  ))
				: type === "album"
				? list.map((item, id) => (
						<Col span={24} key={id}>
							<AlbumItem rank={id + 2} item={item} />
						</Col>
				  ))
				: list.map((item, id) => (
						<Col span={24} key={id}>
							<MusicItem rank={id + 2} item={item} />
						</Col>
				  ))}
		</Row>
	);
}
