import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDrivers, getSessionResults } from "../services/api";

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
		<div className="race-detail">
			{session
				.slice() // ak nechceš mutovať originál
				.sort((a, b) => {
					// 1) tie s null/undefined na koniec
					if (a.position == null) return 1;
					if (b.position == null) return -1;
					// 2) obe pozície sú platné, porovnaj číselne
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
