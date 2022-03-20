const PlayModeButton = ({ label, selectedMode = () => {} }) => {
	return (
		<button
			className='play-mode-button'
			onClick={() => {
				selectedMode(label);
			}}
		>
			<span className="secondary-text">{label}</span>
		</button>
	);
};

export default PlayModeButton;
