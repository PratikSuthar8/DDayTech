import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutContainer from "../components/About/About-container";
import SolutionContainer from "../components/Solutions/SolutionContainer";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
			<SolutionContainer />
		</div>
	);
};

export default Home;
