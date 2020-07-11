import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Main } from "./components/main";
import NavBar from "./components/NavBar/navbar";

import SectionOne from "./pages/Sections/section1";
import Landing from "./pages/landing";

function App() {
	return (
		<Router>
			<Main>
				<NavBar />
				<SectionOne />
			</Main>
			<Landing />
			<Switch>
				<Route path="/analise" component={() => <h2>Hello</h2>} />
			</Switch>
		</Router>
	);
}

export default App;
