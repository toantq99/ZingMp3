import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@actions/AuthAction";
import { RootState } from "@constants/State";
import { CheckOutlined, LoginOutlined } from "@ant-design/icons";
import "./style.scss";

interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const initValue = {
	username: "",
	password: "",
};

const LoginModal: React.FC<Props> = ({ visible, setVisible }) => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((state: RootState) => state.auth);
	const [isSuccess, setIsSuccess] = useState(false);
	return (
		<Modal
			title="Login"
			visible={visible}
			onCancel={() => setVisible(false)}
			footer={null}
			className="login-modal-wrapper"
		>
			<Form
				initialValues={initValue}
				onFinish={(values: any) =>
					dispatch(
						login(values, () => {
							setIsSuccess(true);
							setTimeout(() => {
								setVisible(false);
								setIsSuccess(false);
							}, 500);
						})
					)
				}
				className="login-form-wrapper"
			>
				<Form.Item
					label="Username"
					name="username"
					rules={[{ required: true, message: "Please input your username!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>
				<Form.Item style={{ textAlign: "center" }}>
					<Button
						type="primary"
						htmlType="submit"
						loading={isLoading}
						icon={isSuccess ? <CheckOutlined /> : <LoginOutlined />}
					>
						Login
					</Button>
				</Form.Item>
			</Form>
		</Modal>
	);
};
export default LoginModal;
