import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@actions/AuthAction";
import { RootState } from "@constants/State";
import {
	CheckOutlined,
	LoginOutlined,
	UserOutlined,
	LockOutlined,
} from "@ant-design/icons";
import "./style.scss";
import ErrorInput from "@GlobalComponents/atoms/ErrorInput";
import InputSuffix from "@GlobalComponents/atoms/InputSuffix";
import { LoginSchema } from "@utils/YupSchema";

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
	const { isLoadingLogin } = useSelector((state: RootState) => state.auth);
	const [isSuccess, setIsSuccess] = useState(false);
	return (
		<Modal
			title="Đăng nhập"
			visible={visible}
			onCancel={() => setVisible(false)}
			footer={null}
			className="login-modal-wrapper"
		>
			<Formik
				initialValues={initValue}
				validationSchema={LoginSchema}
				onSubmit={(values) => {
					dispatch(
						login(values, () => {
							setIsSuccess(true);
							setTimeout(() => {
								setVisible(false);
							}, 500);
						})
					);
				}}
			>
				{() => (
					<Form autoComplete="off">
						<div className="input-row-wrapper">
							<label>Tên đăng nhập</label>
							<Field name="username">
								{({ field, meta }: { field: any; meta: any }) => (
									<Input
										placeholder="Tên đăng nhập"
										prefix={<UserOutlined />}
										{...field}
										suffix={<InputSuffix meta={meta} />}
									/>
								)}
							</Field>
							<ErrorMessage
								name="username"
								render={(msg) => <ErrorInput msg={msg} />}
							/>
						</div>
						<div className="input-row-wrapper">
							<label>Mật khẩu</label>
							<Field name="password">
								{({ field, meta }: { field: any; meta: any }) => (
									<Input
										type="password"
										placeholder="Mật khẩu"
										prefix={<LockOutlined />}
										{...field}
										suffix={<InputSuffix meta={meta} />}
									/>
								)}
							</Field>
							<ErrorMessage
								name="password"
								render={(msg) => <ErrorInput msg={msg} />}
							/>
						</div>
						<Button
							className="btn-submit"
							type="primary"
							htmlType="submit"
							loading={isLoadingLogin}
							icon={isSuccess ? <CheckOutlined /> : <LoginOutlined />}
						>
							Đăng nhập
						</Button>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
export default LoginModal;
