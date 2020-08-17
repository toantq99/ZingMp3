import axios from "axios";
import { Dispatch } from "react";
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import { Action_Login, Action_Signup } from "@constants/DataTypes/AuthTypes";
import {
	setLoadingLogin,
	setLoadingStorage,
	setLoadingSignup,
} from "./LoadingAction";
import { notification } from "antd";
import { ActionType_Auth } from "@constants/ActionTypes/AuthActions";

const authServer = "http://localhost:8080/api/user";

export const login = (
	user: { username: string; password: string },
	callback?: () => void
) => (dispatch: Dispatch<Dispatch_Loading | Action_Login>) => {
	dispatch(setLoadingLogin(true));
	axios
		.post(authServer + "/login", { user })
		.then((response) => {
			const { user, token } = response.data;
			dispatch({
				type: ActionType_Auth.LOGIN,
				payload: { user, token },
			});
			localStorage.setItem("auth-token", token);
			notification["success"]({
				message: "Welcome, " + user.fullName,
				placement: "bottomLeft",
			});
		})
		.then(callback)
		.catch((error) => {
			const res = error.response;
			if (res) {
				dispatch({
					type: ActionType_Auth.LOGIN,
					payload: { error: res.data },
				});
			} else {
				dispatch({
					type: ActionType_Auth.LOGIN,
					payload: {
						error: { message: error.message },
					},
				});
			}
			notification["error"]({
				message: "Đăng nhập thất bại",
				description: res ? res.data.message : error.message,
				placement: "bottomLeft",
			});
		})
		.finally(() => dispatch(setLoadingLogin(false)));
};

export const logout = () => (dispatch: Dispatch<{ type: string }>) => {
	dispatch({ type: ActionType_Auth.LOGOUT });
	localStorage.removeItem("auth-token");
};

export const loginFromStorage = () => (
	dispatch: Dispatch<Dispatch_Loading | Action_Login>
) => {
	const token = localStorage.getItem("auth-token");
	if (token) {
		dispatch(setLoadingStorage(true));
		axios
			.get(authServer + "/auth", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((response) => {
				const { user, token } = response.data;
				dispatch({
					type: ActionType_Auth.LOGIN,
					payload: { user, token },
				});
				localStorage.setItem("auth-token", token);
				notification["success"]({
					message: "Welcome back, " + user.fullName,
					placement: "bottomLeft",
				});
			})
			.catch((error) => {
				const res = error.response;
				if (res) {
					dispatch({
						type: ActionType_Auth.LOGIN,
						payload: { error: error.response.data },
					});
				} else {
					dispatch({
						type: ActionType_Auth.LOGIN,
						payload: {
							error: { message: error.message },
						},
					});
				}
				notification["error"]({
					message: "Đăng nhập thất bại",
					description: error.message,
					placement: "bottomLeft",
				});
				localStorage.removeItem("auth-token");
			})
			.finally(() =>
				setTimeout(() => {
					dispatch(setLoadingStorage(false));
				}, 1000)
			);
	}
};

export const signup = (
	newUser: {
		username: string;
		password: string;
		fullName?: string;
		email?: string;
	},
	callback?: () => void
) => (dispatch: Dispatch<Dispatch_Loading | Action_Signup>) => {
	dispatch(setLoadingSignup(true));
	axios
		.post(authServer + "/signup", { newUser })
		.then((response) => {
			const { user, token } = response.data;
			dispatch({
				type: ActionType_Auth.SIGNUP,
				payload: { user, token },
			});
			notification["success"]({
				message: "Đăng ký thành công",
				description: "Welcome, " + user.fullName,
				placement: "bottomLeft",
			});
			localStorage.setItem("auth-token", token);
		})
		.then(callback)
		.catch((err) => {
			dispatch({
				type: ActionType_Auth.SIGNUP,
				payload: { error: err.response.data },
			});
			notification["error"]({
				message: "Đăng ký thất bại",
				description: err.response.data.message,
				placement: "bottomLeft",
			});
		})
		.finally(() => dispatch(setLoadingSignup(false)));
};
