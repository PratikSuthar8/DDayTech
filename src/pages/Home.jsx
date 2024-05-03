import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutContainer from "../components/About/About-container";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
		</div>
	);
};

export default Home;
