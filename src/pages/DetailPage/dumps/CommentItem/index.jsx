import React from "react";
import { Row, Col } from "antd";
import "./style.scss";

export default function CommentItem({ cmt }) {
	return (
		<Row className="cmt-item" align="middle">
			<Col span={4}>
				<img src={cmt.author.picture} alt="avatar" id="avatar" />
			</Col>
			<Col span={20} className="content">
				<h3>
					{cmt.author.name}
					<small>{new Date(cmt.date).toLocaleDateString()}</small>
				</h3>

				<div>{cmt.text}</div>
			</Col>
		</Row>
	);
}
