// Libs
import React from "react";
// Components
import JFYImage from "@HomePage/atoms/JFYImage";
import JFYText from "@HomePage/components/JFYText";
// SCSS
import "./style.scss";

const JustForYou: React.FC = () => {
	return (
		<div className="just-for-you-wrapper">
			<JFYImage />
			<JFYText />
		</div>
	);
};

export default JustForYou;
