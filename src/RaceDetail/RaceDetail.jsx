import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDrivers, getSessionResults } from "../services/api";
import "./RaceDetail.css"

export default function RaceDetail() {
	const { meetingKey } = useParams();
	const [session, setSession] = useState([]);
	const [driver, setDrivers] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const data = await getSessionResults(meetingKey);
				const ddata = await getDrivers(meetingKey);
				setDrivers(ddata);
				setSession(data);
			} catch (err) {
				console.error(err);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="race-detail-context">
			{session
				.slice()
				.sort((a, b) => {
					if (a.position == null) return 1;
					if (b.position == null) return -1;
					return Number(a.position) - Number(b.position);
				})
				.map((session) => (
					<h1 key={session.driver_number}>
						{session.position ? session.position : "DNF"} :
						{" Driver Name"}
					</h1>
				))}
		</div>
	);
}
