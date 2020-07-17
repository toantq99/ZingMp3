import React from "react";
import { Link } from "react-router-dom";
import Search from "./NavSearch";

export default function Navbar() {
	return (
		<div>
			<div className="bg-dark">
				<div
					className="container d-flex justify-bw align-center"
					style={{
						padding: "7px 0",
					}}
				>
					<img src="http://via.placeholder.com/108x36" alt="logo" height={36} />
					<Search />
					<ul
						className="nav-list"
						style={{
							margin: "-7px 0",
						}}
					>
						{["MP3", "NEWS", "TV", "ZALO PC"].map((item, id) => (
							<li key={id} style={{ padding: "0 7px", lineHeight: "50px" }}>
								{item}
							</li>
						))}
					</ul>
					<Link to="/" className="link text-light">
						Đăng nhập
					</Link>
				</div>
			</div>
			<div
				className="bg-gray"
				style={{
					padding: "5px 0",
					height: 30,
				}}
			>
				<div className="d-flex container justify-bw align-center">
					<ul
						className="nav-list"
						style={{
							margin: "-5px 0",
						}}
					>
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
							<li key={id} style={{ padding: "0 10px", lineHeight: "40px" }}>
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
}
