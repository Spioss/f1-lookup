function RaceInfo({ isOpen, onClose, raceResult }) {
	if (!isOpen) return null;

	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div
				className="modal-content"
				onClick={(e) => e.stopPropagation()}
			></div>
		</div>
	);
}

export default RaceInfo;
