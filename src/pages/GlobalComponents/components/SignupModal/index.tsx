import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@constants/State";
import {
	CheckOutlined,
	LoginOutlined,
	UserOutlined,
	LockOutlined,
	MailOutlined,
	UserAddOutlined,
} from "@ant-design/icons";
import { signup } from "@actions/AuthAction";
import "./style.scss";

import { Formik, Field, ErrorMessage, Form } from "formik";
import ErrorInput from "@GlobalComponents/atoms/ErrorInput";
import InputSuffix from "@GlobalComponents/atoms/InputSuffix";
import { SignupSchema } from "@utils/YupSchema";
interface Props {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const initValue = {
	username: "",
	password: "",
	fullName: "",
	email: "",
};

const SignupModal: React.FC<Props> = ({ visible, setVisible }) => {
	const dispatch = useDispatch();
	const { isLoadingSignup } = useSelector(
		(state: RootState) => state.commons.auth
	);
	const [isSuccess, setIsSuccess] = useState(false);
	return (
		<Modal
			title="Đăng ký"
			visible={visible}
			onCancel={() => setVisible(false)}
			footer={null}
			className="signup-modal-wrapper"
		>
			<Formik
				initialValues={initValue}
				validationSchema={SignupSchema}
				onSubmit={(values) => {
					console.log(values);
					dispatch(
						signup(values, () => {
							setIsSuccess(true);
							setTimeout(() => {
								setVisible(false);
								setIsSuccess(false);
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
										prefix={<UserAddOutlined />}
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
						<div className="input-row-wrapper">
							<label>Họ và tên</label>
							<Field name="fullName">
								{({ field, meta }: { field: any; meta: any }) => (
									<Input
										placeholder="Họ và tên"
										prefix={<UserOutlined />}
										{...field}
										suffix={<InputSuffix meta={meta} />}
									/>
								)}
							</Field>
							<ErrorMessage
								name="fullName"
								render={(msg) => <ErrorInput msg={msg} />}
							/>
						</div>
						<div className="input-row-wrapper">
							<label>Email</label>
							<Field name="email">
								{({ field, meta }: { field: any; meta: any }) => (
									<Input
										type="email"
										placeholder="Email"
										prefix={<MailOutlined />}
										{...field}
										suffix={<InputSuffix meta={meta} />}
									/>
								)}
							</Field>
							<ErrorMessage
								name="email"
								render={(msg) => <ErrorInput msg={msg} />}
							/>
						</div>
						<Button
							className="btn-submit"
							type="primary"
							htmlType="submit"
							loading={isLoadingSignup}
							icon={isSuccess ? <CheckOutlined /> : <LoginOutlined />}
						>
							Đăng ký
						</Button>
					</Form>
				)}
			</Formik>
		</Modal>
	);
};
export default SignupModal;
