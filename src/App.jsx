import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Favorites from "./Favorites/Favorites";
import NavBar from "./NavBar/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<main className="main-conten">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
