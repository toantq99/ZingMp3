import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./pages/GlobalComponents/Navbar";
import Footer from "./pages/GlobalComponents/Footer";
import ToTopButton from "./pages/GlobalComponents/ToTopButton";
import FavButton from "./pages/GlobalComponents/FavButton";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import "./index.scss";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<div className="wrapper">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/bai-hat/:id" component={DetailPage} />
					</Switch>
				</div>
				<Footer />
				<ToTopButton />
				<FavButton />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
