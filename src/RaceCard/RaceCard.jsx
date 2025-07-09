import "./RaceCard.css";
import icon from "../assets/formula.png";

function RaceCard({ race }) {
	function favorite() {
		alert("favorited");
	}

	return (
		<div className="race-card">
			<div className="race-img">
				<img src={icon} alt={race.name}></img>
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
	);
}

export default RaceCard;
