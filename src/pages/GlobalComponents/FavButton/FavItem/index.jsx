import React from "react";
import { Row, Col, Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Thumbnail from "../../Thumbnail";

import { removeFav } from "../../../../actions/favListAction";

export default function FavItem({ item }) {
	return (
		<Row
			gutter={[0, 20]}
			align="middle"
			justify="space-between"
			className="border-bottom"
		>
			<Col span={18}>
				<Row gutter={10}>
					<Col>
						<Thumbnail width={50} height={50} item={item} />
					</Col>
					<Col>
						<div className="name-overflow">
							<Link to={`/bai-hat/${item.id}`} title={item.title}>
								{item.title_short}
							</Link>
						</div>

						<div>{item.artist.name}</div>
					</Col>
				</Row>
			</Col>
			<Col>
				<Button
					type="primary"
					shape="round"
					icon={<DeleteFilled />}
					onClick={() => removeFav(item.id)}
					title="Xóa khỏi danh sách yêu thích"
				/>
			</Col>
		</Row>
	);
}
