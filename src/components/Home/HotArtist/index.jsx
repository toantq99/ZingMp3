import React from "react";
import HotArtistItem from "./HotArtistItem";
import { Row, Col } from "antd";

const list = new Array(8);
list.fill({ name: "Đức Phúc" });

export default function HotArtist() {
	return (
		<div>
			<h2 className="text-upper">
				Nghệ sĩ hot
				<span className="material-icons icon-right">keyboard_arrow_right</span>
			</h2>
			<Row gutter={16}>
				<Col span={8}>
					<HotArtistItem item={list[0]} width={210} height={210} />
				</Col>
				<Col span={16}>
					<Row gutter={[10, 10]}>
						{list.map((item, id) => (
							<Col span={6}>
								<HotArtistItem key={id} item={item} width={100} height={100} />
							</Col>
						))}
					</Row>
				</Col>
			</Row>
		</div>
	);
}
