import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyFooter from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import "./index.scss";

// const { Header, Content, Footer } = Layout;

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<div className="wrapper">
					<Route exact path="/" component={Home} />
				</div>
			</Switch>
			<MyFooter />
			<ToTopButton />
		</BrowserRouter>
	);
}

export default App;
