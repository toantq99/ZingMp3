import React from "react";
import SongItem from "./SongItem";
import { RightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import "./style.scss";
import { SongDetail } from "../../../constants/types/songDetailTypes";

interface Props {
	name: string;
	list: SongDetail[];
	size?: string;
}

const SongList: React.FC<Props> = ({ name, list, size }) => {
	return (
		<div className="song-list-wrapper">
			<h2 className="text-upper">
				{name} <RightOutlined />
			</h2>
			<Row>
				{list.map((item, id) => (
					<Col span={24} key={id}>
						<SongItem item={item} size={size} />
					</Col>
				))}
			</Row>
		</div>
	);
};
export default SongList;
