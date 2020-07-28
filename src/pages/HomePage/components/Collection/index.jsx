import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";

import CollectionItem from "@HomePage/dumps/CollectionItem";
import "./style.scss";

export default function Collection({ name, list }) {
	return (
		<div className="collection-wrapper">
			<Link to="/">
				<h2 className="text-upper">
					{name}
					<RightOutlined />
				</h2>
			</Link>
			<Row gutter={[16, 16]}>
				{list.map((item, id) => (
					<Col span={6} key={id}>
						<CollectionItem item={item} width={150} height={150} />
					</Col>
				))}
			</Row>
		</div>
	);
}
