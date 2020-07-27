import React from "react";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import { Row, Col } from "antd";
import {
	HomeFilled,
	PoweroffOutlined,
	CloudUploadOutlined,
} from "@ant-design/icons";
import "./style.scss";

export default function Navbar() {
	return (
		<>
			<div className="nav-top">
				<div className="nav-top-container">
					<Row align="middle">
						<Col span={4}>
							<Link to="/">
								<img
									src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png"
									alt="logo"
									className="nav-logo"
								/>
							</Link>
						</Col>
						<Col span={8}>
							<NavSearch />
						</Col>
						<Col span={10}>
							<ul className="nav-list-top">
								{["MP3", "NEWS", "TV", "ZALO PC"].map((item, id) => (
									<li key={id}>
										<Link to="/">{item}</Link>
									</li>
								))}
							</ul>
						</Col>
						<Col span={2} className="text-right">
							<Link to="/">Đăng nhập</Link>
						</Col>
					</Row>
				</div>
			</div>
			<div className="nav-bot">
				<div className="nav-bot-container">
					<Row>
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
			</div>
		</>
	);
}
