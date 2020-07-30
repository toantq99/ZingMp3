import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import NavSearch from "../NavSearch";
import "./style.scss";

const NavTop: React.FC = () => {
	return (
		<div className="nav-top-wrapper">
			<Row align="middle" className="nav-top-container">
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
	);
};

export default NavTop;
