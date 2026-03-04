import React from "react";

const Footer = () => {
	return (
		<footer className="bg-dark text-light py-4 mt-5">
			<div className="container text-center">
				<p className="mb-1">&copy; 2026 Mi Sitio Web. Todos los derechos reservados.</p>
				<div>
					<a href="#" className="text-light me-3">Facebook</a>
					<a href="#" className="text-light me-3">Twitter</a>
					<a href="#" className="text-light">Instagram</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;