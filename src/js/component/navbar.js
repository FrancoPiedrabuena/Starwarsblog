import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="logo">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="img-fluid" src="https://i.pinimg.com/originals/c6/8c/0f/c68c0f53d50ea8aa4a21b6374814b4a2.jpg"/>
				</span>
			</Link>

			</div>

			<div className="btn-group">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle">Favorites</button>
					
				</Link>
			</div>
		</nav>
	);
};
