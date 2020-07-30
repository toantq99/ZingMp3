import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
	HomeFilled,
	PoweroffOutlined,
	CloudUploadOutlined,
} from "@ant-design/icons";
import "./style.scss";

const NavBot: React.FC = () => {
	return (
		<div className="nav-bot-wrapper">
			<Row className="nav-bot-container">
				<Col span={1}>
					<Link to="/">
						<HomeFilled />
					</Link>
				</Col>
				<Col span={18}>
					<ul className="nav-list-bot">
						{[
							"Nhạc cá nhân",
							"#zingchart",
							"Top 100",
							"Chủ đề",
							"Video",
							"Album",
							"Nghệ sĩ",
							"VIP",
						].map((item, id) => (
							<li key={id}>
								<Link to="/">{item}</Link>
							</li>
						))}
					</ul>
				</Col>
				<Col span={5} className="pull-right">
					<ul className="nav-list-bot">
						<li>
							<Link to="/">
								<PoweroffOutlined />
								Tắt quảng cáo
							</Link>
						</li>
						<li>
							<Link to="/">
								<CloudUploadOutlined />
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</div>
	);
};
export default NavBot;
