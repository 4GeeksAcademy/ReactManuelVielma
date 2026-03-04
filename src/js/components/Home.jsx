import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron"; // minúscula aquí
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row justify-content-center gap-5">
				<Card className="col-12 col-md-3 mb-3" />
				<Card className="col-12 col-md-3 mb-3" />
				<Card className="col-12 col-md-3 mb-3" />
				<Card className="col-12 col-md-3 mb-3" />
			</div>
			<Footer/>
		</div>
	);
};

export default Home;