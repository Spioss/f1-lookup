import { Link } from "react-router-dom";
import "./RaceCard.css";

function RaceCard({ race }) {
	function favorite() {
		alert("favorited");
	}

	return (
		<Link to={`/race/${race.meetingKey}`} className="cardLink">
			<div className="race-card">
				<div className="race-img">
					<img src={race.url} alt={race.name}></img>
					<div className="race-overlay">
						<button className="favorite-btn" onClick={favorite}>
							❤
						</button>
					</div>
				</div>

				<div className="race-info">
					<h3>{race.name}</h3>
					<p>{race.date}</p>
				</div>
			</div>
		</Link>
	);
}

export default RaceCard;
