import React from "react";
import { Button } from "antd";

const PaginateButton = ({ icon, onClick, disabled, title }) => {
	return (
		<Button
			type="primary"
			shape="circle"
			icon={icon}
			disabled={disabled}
			size="large"
			title={title}
			onClick={onClick}
		/>
	);
};

export default PaginateButton;
