const BASE_URL = "https://api.openf1.org/v1/meetings";

fetch(`${BASE_URL}`)
	.then((res) => res.json())
	.catch(console.error);

export const getMeetings = async () => {
	const resposne = await fetch(`${BASE_URL}?year=2024`);
	const data = await resposne.json();
	console.log(data);
	return data;
};
