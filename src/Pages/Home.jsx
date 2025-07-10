import RaceCard from "../RaceCard/RaceCard";
import { useState, useEffect } from "react";
import { getMeetings } from "../services/api";
import { formatDate } from "../services/timeformat";
import "./Home.css";
import { countryToCode } from "../services/resolvecountry";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [races, setRaces] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getMeetings(2024);
				setRaces(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		alert(searchQuery);
		setSearchQuery("");
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
				{races.map(
					(race) =>
						race.meeting_name
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) && (
							<RaceCard
								race={{
									name: race.meeting_name,
									date: formatDate(race.date_start),
									url: `https://flagcdn.com/w640/${
										countryToCode[race.country_name]
									}.png`,
								}}
								key={race.meeting_key}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default Home;
