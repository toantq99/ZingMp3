// Libs
import React from "react";
// SCSS
import "./style.scss";

const NewsItem: React.FC = () => {
	return (
		<div className="news-item-wrapper">
			<img
				src="https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_14/Thumb_Top_1_nua_dau_2020.jpg"
				alt="news"
				loading="lazy"
			/>
			<div className="content">
				Bích Phương, Binz được nhiều hơn mất khi đối đầu Sơn Tùng M-TP?
			</div>
		</div>
	);
};

export default NewsItem;
