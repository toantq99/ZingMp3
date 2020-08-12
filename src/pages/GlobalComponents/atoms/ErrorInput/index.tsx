import React from "react";
import "./style.scss";
const ErrorInput: React.FC<{ msg: string }> = ({ msg }) => {
	return <small className="error-input-wrapper">{msg}</small>;
};
export default ErrorInput;
