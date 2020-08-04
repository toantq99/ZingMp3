import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

import HotTopicItem from "@HomePage/dumps/HotTopicItem";
import "./style.scss";

const HotTopic: React.FC = () => {
	return (
		<>
			<Link to="/">
				<div className="just-for-you-wrapper">
					<img
						src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg"
						alt="just-for-you"
					/>
					<div>
						<strong>Dành riêng cho bạn</strong>
						<span>
							Nghe những ca khúc yêu thích và khám phá âm nhạc dành riêng cho
							bạn.
						</span>
					</div>
				</div>
			</Link>
			<div className="hot-topic-wrapper">
				<h3>CHỦ ĐỀ HOT</h3>
				{[1, 2, 3, 4, 5].map((item, id) => (
					<HotTopicItem key={id} item={item} />
				))}
				<Link to="/" className="link text-dark">
					Xem thêm chủ đề <RightOutlined />
				</Link>
			</div>
		</>
	);
};

export default HotTopic;
