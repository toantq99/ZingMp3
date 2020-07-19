import React from "react";
import Thumbnail from "../../../Global/Thumbnail";
import { Col } from "antd";

export default function CollectionItem({ item, width, height, src }) {
	return (
		<Col className="gutter-row">
			<Thumbnail width={width} height={height} src={src} />
			<div style={{ maxWidth: width }}>{item.name}</div>
			<small className="text-gray">{item.singer}</small>
		</Col>
	);
}
