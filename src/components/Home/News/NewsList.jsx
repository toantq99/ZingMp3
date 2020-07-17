import React from "react";
import NewsItem from "./NewsItem";

export default function NewsList() {
	return (
		<div>
			<h4 className="text-upper">
				Tin tức âm nhạc
				<span className="material-icons icon">keyboard_arrow_right</span>
			</h4>
			<div
				style={{
					backgroundImage:
						"url(https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_15/Song_gio_thumb.jpg)",
					width: 300,
					height: 168,
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			>
				<div className="text-light" style={{ padding: 10, fontWeight: "bold" }}>
					Giải mã kỷ lục 500 triệu lượt nghe của ‘Sóng gió’
				</div>
			</div>
			<div>
				{[1, 2, 3, 4, 5].map((item) => (
					<NewsItem key={item} />
				))}
			</div>
		</div>
	);
}
