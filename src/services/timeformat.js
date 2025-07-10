export function formatDate(isoString) {
	const date = new Date(isoString);
	// getDate() vráti deň 1–31
	const day = date.getDate();
	// getMonth() vráti mesiac 0–11, preto +1
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	return `${day}.${month} - ${year}`;
}
