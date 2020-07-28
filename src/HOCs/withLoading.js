import React from "react";
import { Spin, Row, Col } from "antd";

export default function withLoading(isLoading) {
	return function withLoadingComponent(Component) {
		if (isLoading)
			return (
				<Row gutter={[0, 30]}>
					<Col span={24}>
						<Spin size="large" />
					</Col>
				</Row>
			);
		else return Component;
	};
}
