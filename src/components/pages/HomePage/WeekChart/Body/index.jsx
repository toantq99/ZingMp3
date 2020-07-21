import React from "react";
import MusicItem from "../MusicItem";
import MvItem from "../MvItem";
import AlbumItem from "../AlbumItem";
import { Row, Col } from "antd";

const musicList = new Array(9);
musicList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	count: "1,883",
});

const mvList = new Array(4);
mvList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	count: "1,883",
});

const albumList = new Array(4);
albumList.fill({
	name: "Cho anh say",
	singer: "Phan Duy Anh, ACV",
	count: "1,883",
});

export default function Body({ type, list }) {
	if (!type) list = musicList;
	else list = mvList;
	return (
		<Row>
			{type === "mv"
				? list.map((item, id) => (
						<Col span={24} key={id}>
							<MvItem rank={id + 2} item={item} type={type} />
						</Col>
				  ))
				: type === "album"
				? list.map((item, id) => (
						<Col span={24} key={id}>
							<AlbumItem rank={id + 2} item={item} type={type} />
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
