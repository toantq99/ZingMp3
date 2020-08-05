import React from "react";
import { Spin, Row, Col } from "antd";

const withLoading = (isLoading: boolean) => (Component: any) => {
	if (isLoading)
		return (
			<Row gutter={[0, 30]} style={{ minHeight: 300 }} align="middle">
				<Col span={24} style={{ textAlign: "center" }}>
					<Spin size="large" />
				</Col>
			</Row>
		);
	else return Component;
};
export default withLoading;
