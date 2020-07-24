import React from "react";
import { Row, Col, Spin } from "antd";
import CommentItem from "@DetailPage/dumps/CommentItem";

export default function Comments({ list }) {
	return (
		<Row>
			<Col span={24}>
				<h1>Bình luận</h1>
			</Col>
			{list ? (
				list.map((cmt, id) => (
					<Col span={24} key={id}>
						<CommentItem cmt={cmt} />
					</Col>
				))
			) : (
				<Col span={24}>
					<Spin />
				</Col>
			)}
		</Row>
	);
}
