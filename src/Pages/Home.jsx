import RaceCard from "../RaceCard/RaceCard";
import { useState } from "react";
import "./Home.css";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");

	const races = [
		{ id: 1, name: "Monaco GP", date: "02-06-2025", url: "#" },
		{ id: 2, name: "Italian GP", date: "24-6-2025", url: "#" },
		{ id: 3, name: "Brazil GP", date: "14-07-2025", url: "#" },
		{ id: 4, name: "Silverstone GP", date: "12-08-2025", url: "#" },
	];

	const handleSearch = (e) => {
		e.preventDefault();
		alert(searchQuery);
		//setSearchQuery("");
	};

	return (
		<div className="home">
			<form onSubmit={handleSearch} className="search-form">
				<input
					type="text"
					placeholder="Search for Races..."
					className="search-input"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				></input>
				<button type="submit" className="search-btn">
					Search
				</button>
			</form>
			<div className="movie-grid">
				{races.map((race) => (
					<RaceCard race={race} key={race.id} />
				))}
			</div>
		</div>
	);
}

export default Home;
