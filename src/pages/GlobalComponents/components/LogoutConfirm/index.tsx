import React from "react";
import { Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { logout } from "@actions/AuthAction";

const LogoutConfirm: React.FC<{ children: JSX.Element }> = ({ children }) => {
	const dispatch = useDispatch();
	return (
		<Popconfirm
			placement="bottomRight"
			title="Đăng xuất ???"
			onConfirm={() => dispatch(logout())}
		>
			{children}
		</Popconfirm>
	);
};
export default LogoutConfirm;
