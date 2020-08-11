// Libs
import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Spin } from "antd";
// Store
import store from "./store";
// Components
import Navbar from "@GlobalComponents/mains/Navbar";
import Footer from "@GlobalComponents/mains/Footer";
import ToTopButton from "@GlobalComponents/mains/ToTopButton";
import FavButton from "@GlobalComponents/mains/FavButton";
// SCSS
import "./index.scss";
// Lazy Components
const DetailPage = React.lazy(() => import("./pages/DetailPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage"));
const AlbumPage = React.lazy(() => import("./pages/AlbumPage"));

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar />
				<div className="app-wrapper">
					<Suspense fallback={<Spin size="large" />}>
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route path="/bai-hat/:id" component={DetailPage} />
							<Route path="/album/:id" component={AlbumPage} />
							<Route path="/tim-kiem/" component={SearchPage} />
						</Switch>
					</Suspense>
				</div>
				<Footer />
				<ToTopButton />
				<FavButton />
			</BrowserRouter>
		</Provider>
	);
};

export default App;
