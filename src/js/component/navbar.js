import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="ms-5" src="https://www.star-wars.se/wp-content/uploads/2023/01/toppng.com-star-wars-logos-icons-vector-star-wars-felirat-keszites-2059x881-1.png" alt="" width="120" height="60" />
			</Link>
			<div className="ml-auto">
				<div class="btn-group me-5" role="group">
					<button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown
					</button>
					<ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
						<li><a class="dropdown-item" href="#">Dropdown link</a></li>
						<li><a class="dropdown-item" href="#">Dropdown link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
