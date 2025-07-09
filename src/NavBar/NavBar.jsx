import { Link } from "react-router-dom";
import "./NavBar.css";
import icon from "../assets/formula.png";

function NavBar() {
	return (
		<nav className="navbar">
			<Link to="/" className="navbar-header">
				F1 Lookup
			</Link>
			<div className="navbar-links">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/favorites" className="nav-link">
					Favorites
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
