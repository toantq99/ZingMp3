import React from "react";
import CollectionItem from "../CollectionItem";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./style.scss";

const collection = new Array(12);
collection.fill({ name: "Bigcityboy", singer: "Binz, Touliver" });

export default function HotVideo() {
	return (
		<div>
			<Link to="/">
				<h2 className="text-upper">
					Video Hot
					<RightOutlined />
				</h2>
			</Link>
			<Row gutter={[16, 16]}>
				{collection.map((item, id) => (
					<Col span={6} key={id}>
						<CollectionItem
							item={item}
							width={150}
							height={80}
							src="https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/8/7/9/2/879240e912e1e8aa870c7b89a68553bc.jpg"
						/>
					</Col>
				))}
			</Row>
		</div>
	);
}
