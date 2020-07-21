import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";

import HotTopicItem from "./HotTopicItem";
import "./style.scss";

export default function HotTopic() {
	return (
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<div className="just-for-you">
					<Link to="/">
						<Row gutter={16}>
							<Col span={8}>
								<img
									src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg"
									alt="just-for-you"
								/>
							</Col>
							<Col span={16}>
								<div>
									<strong>Dành riêng cho bạn</strong>
								</div>
								<div className="text-small text-light">
									Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng
									cho bạn.
								</div>
							</Col>
						</Row>
					</Link>
				</div>
			</Col>
			<Col span={24}>
				<div>
					<h3 className="text-upper">Chủ đề hot</h3>
					{[
						"Trending",
						"Cà phê",
						"Music for love",
						"ca sĩ hàn quốc",
						"hôm nay nghe gì",
					].map((item, id) => (
						<HotTopicItem key={id} item={item} />
					))}
					<Link to="/" className="link text-dark">
						Xem thêm chủ đề <RightOutlined />
					</Link>
				</div>
			</Col>
		</Row>
	);
}
