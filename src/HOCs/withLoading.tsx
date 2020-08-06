import React from "react";
import { Spin, Row, Col } from "antd";

const withLoading = (isLoading: boolean) => (Component: any) => {
	if (isLoading)
		return (
			<Row align="middle" justify="center" style={{ height: 300 }}>
				<Col>
					<Spin size="large" />
				</Col>
			</Row>
		);
	else return Component;
};
export default withLoading;
