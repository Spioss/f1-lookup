import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDriversMap, getSessionResults } from "../services/api";
import "./RaceDetail.css";

export default function RaceDetail() {
	const { meetingKey } = useParams();
	const [session, setSession] = useState([]);
	const [driversMap, setDrivers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getSessionResults(meetingKey);
				const ddata = await getDriversMap(meetingKey);
				setDrivers(ddata);
				setSession(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="race-context">
			<div className="race-detail">
				<h1>Session Placement</h1>
				{session
					.slice()
					.sort((a, b) => {
						if (a.position == null) return 1;
						if (b.position == null) return -1;
						return Number(a.position) - Number(b.position);
					})
					.map((session) => (
						<h2 className="drivers" key={session.driver_number}>
							{session.position ? session.position : "DNF"}{" "}
							{driversMap[session.driver_number].toUpperCase()}
						</h2>
					))}
			</div>
		</div>
	);
}
