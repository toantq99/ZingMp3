import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ToTopButton from "./components/Static/ToTopButton";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<div className="wrapper" style={{ background: "#f2f2f2" }}>
					<div className="container bg-light">
						<Route exact path="/" component={Home} />
					</div>
				</div>
			</Switch>
			<Footer />
			<ToTopButton />
		</BrowserRouter>
	);
}

export default App;
