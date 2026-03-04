import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSQt3nHkIF5fL2fC4rM756Rf-E3evr09-9ppupWLvgO2WLna-QYSOyvzUm8BH64FlObXiunQQ_DwbQnEOw"
				className="card-img-top"
				alt="Card image"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;