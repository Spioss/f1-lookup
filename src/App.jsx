import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
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
