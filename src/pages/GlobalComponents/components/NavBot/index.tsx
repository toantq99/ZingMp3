// Libs
import React from "react";
// Components
import NavBotHome from "@GlobalComponents/atoms/NavBotHome";
import NavBotListCenter from "@GlobalComponents/components/NavBotListCenter";
import NavBotListRight from "@GlobalComponents/components/NavBotListRight";
// SCSS
import "./style.scss";

const NavBot: React.FC = () => {
	return (
		<div className="nav-bot-wrapper">
			<div className="nav-bot-container">
				<div>
					<NavBotHome />
					<NavBotListCenter />
				</div>
				<NavBotListRight />
			</div>
		</div>
	);
};
export default NavBot;
