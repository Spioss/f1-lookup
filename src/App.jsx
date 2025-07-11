import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Favorites from "./Favorites/Favorites";
import NavBar from "./NavBar/NavBar";
import RaceDetail from "./RaceDetail/RaceDetail";

function App() {
	return (
		<div>
			<NavBar />
			<main className="main-conten">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/race/:meetingKey" element={<RaceDetail />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
