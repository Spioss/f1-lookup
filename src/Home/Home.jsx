import RaceCard from "../RaceCard/RaceCard";
import { useState, useEffect } from "react";
import { getMeetings, getSessionResults } from "../services/api";
import { formatDate } from "../services/timeformat";
import "./Home.css";
import { countryToCode } from "../services/resolvecountry";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [races, setRaces] = useState([]);
	const [year, setYear] = useState(2024);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getMeetings(year);
				setRaces(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, [year]);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchQuery("");
	};

	return (
		<div className="home">
			<form onSubmit={handleSearch} className="search-form">
				<input
					type="text"
					placeholder="Search for any Races..."
					className="search-input"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				></input>

				<div className="year-picker">
					<label htmlFor="year-select">Year:</label>
					<select
						id="year-select"
						value={year}
						onChange={(e) => setYear(Number(e.target.value))}
					>
						<option value={2023}>2023</option>
						<option value={2024}>2024</option>
						<option value={2025}>2025</option>
					</select>
				</div>
			</form>

			<div className="movie-grid">
				{races.map(
					(race) =>
						race.meeting_name
							.toLowerCase()
							.includes(searchQuery.toLowerCase()) && (
							<RaceCard
								race={{
									meetingKey: race.meeting_key,
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
