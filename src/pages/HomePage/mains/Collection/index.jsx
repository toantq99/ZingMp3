import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Spin } from "antd";
import { RightOutlined } from "@ant-design/icons";

import CollectionItem from "@HomePage/components/CollectionItem";
import "./style.scss";

import { getCollection } from "@actions/homeAction";

export default function Collection({ name, query }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCollection(query, 8));
		return () => {};
	}, [dispatch, query]);

	const list = useSelector((state) => state.home.collection[query]);
	return (
		<>
			<Link to="/">
				<h2 className="text-upper">
					{name}
					<RightOutlined />
				</h2>
			</Link>
			<Row gutter={[16, 16]}>
				{list ? (
					list.map((item, id) => (
						<Col span={6} key={id}>
							<CollectionItem item={item} width={150} height={150} />
						</Col>
					))
				) : (
					<Col span={24}>
						<Spin size="large" />
					</Col>
				)}
			</Row>
		</>
	);
}
