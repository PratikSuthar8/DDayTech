import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutContainer from "../components/About/About-container";
import SolutionContainer from "../components/Solutions/SolutionContainer";
import Footer from "../components/Footer/Footer";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContainer />
			<SolutionContainer />
			<Footer />
		</div>
	);
};

export default Home;
