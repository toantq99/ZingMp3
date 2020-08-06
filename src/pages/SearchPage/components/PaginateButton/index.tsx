// Libs
import React from "react";
import { Button } from "antd";
// SCSS
import "./style.scss";
interface Props {
	icon: JSX.Element;
	onClick: () => void;
	disabled: boolean;
	title: string;
}

const PaginateButton: React.FC<Props> = ({
	icon,
	onClick,
	disabled,
	title,
}) => {
	return (
		<Button
			className="paginate-button-wrapper"
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
