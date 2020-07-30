import React from "react";
import { Row, Col } from "antd";
const NewsItem: React.FC = () => {
	return (
		<Row align="middle" gutter={[5, 10]}>
			<Col span={8}>
				<img
					src="https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_14/Thumb_Top_1_nua_dau_2020.jpg"
					alt="news"
					width={100}
					height={66}
				/>
			</Col>
			<Col span={16}>
				Bích Phương, Binz được nhiều hơn mất khi đối đầu Sơn Tùng M-TP?
			</Col>
		</Row>
	);
};

export default NewsItem;
