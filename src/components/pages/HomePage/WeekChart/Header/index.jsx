import React from "react";
import { Row, Col } from "antd";
import MusicItem from "../MusicItem";
import "./style.scss";

export default function Header({ type }) {
	return (
		<Row className="wchart-header">
			<Col span={24}>
				<Row className="button-group">
					<Col span={8}>
						<button className="active">Việt Nam</button>
					</Col>
					<Col span={8}>
						<button>US-UK</button>
					</Col>
					<Col span={8}>
						<button>K-Pop</button>
					</Col>
				</Row>
			</Col>
			<Col span={24} className="banner">
				<img
					src="https://photo-zmp3.zadn.vn/banner/1/2/8/f/128fba5cb8c0adea6f79e4de403e96d5.jpg"
					alt="cover"
				/>
				<div className="header-item">
					<MusicItem
						rank={1}
						item={{
							name: "Cho anh say",
							singer: "Phan Duy Anh, ACV",
							count: "1,883",
						}}
						hasHover={!type}
					/>
				</div>
			</Col>
		</Row>
	);
}
