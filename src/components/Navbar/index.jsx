import React from "react";
import { Link } from "react-router-dom";
import NavSearch from "./NavSearch";
import "./style.scss";

export default function Navbar() {
	return (
		<div>
			<div className="bg-dark">
				<div className="wrapper d-flex justify-bw align-center nav-top">
					<img
						src="http://via.placeholder.com/108x36"
						alt="logo"
						className="nav-logo"
					/>
					<NavSearch />
					<ul className="nav-list nav-list-top">
						{["MP3", "NEWS", "TV", "ZALO PC"].map((item, id) => (
							<li key={id} className="nav-item-top">
								<Link to="/" className="link text-light">
									{item}
								</Link>
							</li>
						))}
					</ul>
					<Link to="/" className="link text-light">
						Đăng nhập
					</Link>
				</div>
			</div>
			<div className="bg-light">
				<div className="d-flex wrapper justify-bw align-center nav-bottom">
					<ul className="nav-list nav-list-bottom">
						{[
							<span className="material-icons icon">home</span>,
							"Nhạc cá nhân",
							"#zingchart",
							"Top 100",
							"Chủ đề",
							"Video",
							"Album",
							"Nghệ sĩ",
							"VIP",
						].map((item, id) => (
							<li key={id} className="nav-item-bottom">
								<Link to="/" className="text-dark link">
									{item}
								</Link>
							</li>
						))}
					</ul>
					<ul
						className="nav-list"
						style={{
							margin: "-5px 0",
						}}
					>
						<li style={{ padding: "0 10px", lineHeight: "40px" }}>
							<Link to="/" className="text-dark link">
								<span className="material-icons icon">power_settings_new</span>
								Tắt quảng cáo
							</Link>
						</li>
						<li style={{ padding: "0 10px", lineHeight: "40px" }}>
							<Link to="/" className="link">
								<span className="material-icons icon">cloud_upload</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

	// return (
	// 	<div>
	// 		<div className="bg-dark">
	// 			<Row>
	// 				<Col span={3} offset={3}>
	// 					<img src="http://via.placeholder.com/108x36" alt="logo" />
	// 				</Col>
	// 				<Col span={6}>
	// 					<NavSearch />
	// 				</Col>
	// 				<Col span={6}></Col>
	// 				<Col span={3}>
	// 					<div style={{ textAlign: "right" }}>
	// 						<Link to="/">Đăng nhập</Link>
	// 					</div>
	// 				</Col>
	// 			</Row>
	// 		</div>
	// 		<div className="bg-light">dasd</div>
	// 	</div>
	// );
}
