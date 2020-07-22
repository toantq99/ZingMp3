import React from "react";
import { Row, Col, Spin } from "antd";
import { RightOutlined } from "@ant-design/icons";
import HotArtistItem from "../../dumps/HotArtistItem";

import artist from "../../../../mocks/artist";

const [first, ...rest] = artist;

export default function HotArtist() {
	return (
		<div>
			<h2 className="text-upper">
				Nghệ sĩ hot
				<RightOutlined />
			</h2>
			<Row gutter={16}>
				<Col span={8}>
					<HotArtistItem item={first} width={210} height={210} />
				</Col>
				<Col span={16}>
					<Row gutter={[10, 10]}>
						{rest ? (
							rest.map((item, id) => (
								<Col span={6} key={id}>
									<HotArtistItem item={item} width={100} height={100} />
								</Col>
							))
						) : (
							<Col span={24}>
								<Spin size="large" />
							</Col>
						)}
					</Row>
				</Col>
			</Row>
		</div>
	);
}
