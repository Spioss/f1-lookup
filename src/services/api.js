const BASE_URL = "https://api.openf1.org/v1/";

fetch(`${BASE_URL}`)
	.then((res) => res.json())
	.catch(console.error);

export const getMeetings = async (year) => {
	const resposne = await fetch(`${BASE_URL}meetings?year=${year}`);
	const data = await resposne.json();
	console.log(data);
	return data;
};

export const getSessionResults = async (meeting_key) => {
	const session_key = await getSessionKey(meeting_key);
	if (!session_key) return {};

	const resposne = await fetch(
		`${BASE_URL}session_result?session_key=${session_key}`
	);
	const data = await resposne.json();

	console.log(data);
	return data;
};

async function getSessionKey(meeting_key) {
	const response = await fetch(
		`${BASE_URL}sessions?meeting_key=${meeting_key}&session_type=Race`
	);
	const sessions = await response.json();
	return sessions[0]?.session_key;
}

export async function getDriversMap(meeting_key) {
	const session_key = await getSessionKey(meeting_key);
	if (!session_key) return {};

	const response = await fetch(
		`${BASE_URL}drivers?session_key=${session_key}`
	);
	const data = await response.json();

	return data.reduce((map, d) => {
		map[d.driver_number] = d.full_name;
		return map;
	}, {});
}
