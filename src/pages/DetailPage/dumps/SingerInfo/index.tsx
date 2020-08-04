import React from "react";
import { Row, Col } from "antd";
import { Singer } from "@constants/types/songDetailTypes";

interface Props {
	singer: Singer;
	className?: string;
}

const SingerInfo: React.FC<Props> = ({ singer, className }) => {
	return (
		<Row className={className}>
			<Col span={6}>
				<img src={singer.picture} alt="singer" />
			</Col>
			<Col span={18}>
				<Row>
					<Col span={24}>
						<h2>{singer.name}</h2>
					</Col>
					<Col span={24}>Singer description</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default SingerInfo;
