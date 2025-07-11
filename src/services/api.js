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
	const sessionResposne = await fetch(
		`${BASE_URL}sessions?meeting_key=${meeting_key}&session_name=Race`
	);
	const sessionData = await sessionResposne.json();

	const { session_key } = sessionData[0];

	const resposne = await fetch(
		`${BASE_URL}session_result?session_key=${session_key}`
	);
	const data = await resposne.json();

	console.log(data);
	return data;
};

// NEED WORK ON THIS DONT KNOW
export const getDrivers = async (meeting_key) => {
	const response = await fetch(
		`${BASE_URL}drivers?meeting_key=${meeting_key}`
	);

	const data = await response.json();

	console.log(data);
	return data;
};
