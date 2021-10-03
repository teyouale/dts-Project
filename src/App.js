import React from "react";
import NavBarComponents from "./Components/NavBarComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Services from "./pages/ServicesPage/Services";
import Footer from "./Components/Footer";
import SignUp from "./pages/SignUp/SignUp";

function App() {
	return (
		<Router>
			<NavBarComponents />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/sign-up' component={SignUp} />
			</Switch>
			{/* <Footer id="contact_us" /> */}
		</Router>
	);
}

export default App;
