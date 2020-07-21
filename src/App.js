import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Global/Navbar";
import MyFooter from "./components/Global/Footer";
import ToTopButton from "./components/Global/ToTopButton";
import HomePage from "./components/pages/HomePage";
import DetailPage from "./components/pages/DetailPage";
import "./index.scss";

function App() {
	return (
		<div>
			<Navbar />
			<div className="wrapper">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/detail/:id" component={DetailPage} />
				</Switch>
			</div>

			<MyFooter />
			<ToTopButton />
		</div>
	);
}

export default App;
