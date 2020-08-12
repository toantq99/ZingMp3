import React from "react";
import { Tooltip } from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";

const InputSuffix: React.FC<{ meta: { touched: boolean; error: string } }> = ({
	meta,
}) => {
	return meta.touched ? (
		meta.error ? (
			<Tooltip title={meta.error}>
				<CloseCircleOutlined style={{ color: "#ff0000" }} />
			</Tooltip>
		) : (
			<CheckCircleOutlined style={{ color: "#52c41a" }} />
		)
	) : null;
};

export default InputSuffix;
