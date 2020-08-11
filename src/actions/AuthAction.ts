import axios from "axios";
import { Dispatch } from "react";
import { Dispatch_Loading } from "@constants/DataTypes/LoadingTypes";
import { Action_Login } from "@constants/DataTypes/AuthTypes";
import { setLoadingLogin, setLoadingStorage } from "./LoadingAction";
import { notification } from "antd";
import { ActionType_Auth } from "@constants/ActionTypes/AuthActions";

const server = "http://localhost:8080/api";

export const login = (
	user: { username: string; password: string },
	callback?: () => void
) => (dispatch: Dispatch<Dispatch_Loading | Action_Login>) => {
	dispatch(setLoadingLogin(true));
	axios
		.post(server + "/login", { user })
		.then((response) => {
			const { user, token, error } = response.data;
			if (error) {
				notification["error"]({
					message: "Login failed",
					description: error.message,
					placement: "bottomLeft",
				});
			} else {
				dispatch({
					type: ActionType_Auth.LOGIN,
					payload: { user, token, error },
				});
				localStorage.setItem("auth-token", token);
			}
		})
		.then(() => dispatch(setLoadingLogin(false)))
		.then(callback)
		.catch((error) =>
			dispatch({
				type: ActionType_Auth.LOGIN,
				payload: { error },
			})
		);
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
			.post(server + "/auth", { token })
			.then((response) => {
				const { user, token, error } = response.data;
				if (error) {
					notification["error"]({
						message: "Login failed",
						description: error.message,
						placement: "bottomLeft",
					});
					localStorage.removeItem("auth-token");
				} else {
					dispatch({
						type: ActionType_Auth.LOGIN,
						payload: { user, token, error },
					});
					localStorage.setItem("auth-token", token);
				}
			})
			.then(() => dispatch(setLoadingStorage(false)))
			.catch((error) => {
				dispatch({
					type: ActionType_Auth.LOGIN,
					payload: { error },
				});
				localStorage.removeItem("auth-token");
			});
	}
};
