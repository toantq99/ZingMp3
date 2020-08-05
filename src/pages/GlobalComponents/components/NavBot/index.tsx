import React from "react";
import "./style.scss";
import NavBotListCenter from "@GlobalComponents/components/NavBotListCenter";
import NavBotListRight from "@GlobalComponents/components/NavBotListRight";
import NavBotHome from "@GlobalComponents/atoms/NavBotHome";

const NavBot: React.FC = () => {
	return (
		<div className="nav-bot-wrapper">
			<div className="nav-bot-container">
				<NavBotHome />
				<NavBotListCenter />
				<NavBotListRight />
			</div>
		</div>
	);
};
export default NavBot;
