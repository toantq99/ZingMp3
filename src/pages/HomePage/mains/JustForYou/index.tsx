import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import JFYImage from "@HomePage/atoms/JFYImage";
import JFYText from "@HomePage/components/JFYText";

const JustForYou = () => {
	return (
		<Link to="/">
			<div className="just-for-you-wrapper">
				<JFYImage />
				<JFYText />
			</div>
		</Link>
	);
};

export default JustForYou;
