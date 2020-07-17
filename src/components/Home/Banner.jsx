import React from "react";
import { Link } from "react-router-dom";
import "../../css/Banner.css";

export default function Banner() {
	return (
		<div className="col-0 ">
			<Link to="/">
				<img
					src="https://photo-zmp3.zadn.vn/banner/e/5/9/c/e59c3dd3f6db59d63a3a180fad5e5627.jpg"
					alt="main-banner"
					className="banner"
				/>
			</Link>
			<div className="d-flex justify-bw banner-list">
				{[1, 2, 3, 4, 5].map((item) => (
					<img
						src="https://photo-zmp3.zadn.vn/banner/e/5/9/c/e59c3dd3f6db59d63a3a180fad5e5627.jpg"
						alt="banner"
						key={item}
						className="banner-item"
					/>
				))}
			</div>
		</div>
	);
}
