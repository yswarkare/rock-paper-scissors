import PlayModeButton from '../../components/PlayModeButton/PlayModeButton';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';

const playModes = [
	{
		label: 'Player Vs Computer',
	},
	{
		label: 'Computer Vs Computer',
	},
];

const SelectPlayers = () => {
	const player2 = useContextState().player2;
	const updateContextState = useUpdateContextState();

	const setSelectedMode = (mode) => {
		if (mode === 'Player Vs Computer') {
			updateContextState('player2', { ...player2, type: 'Person' });
		}
		if (mode === 'Computer Vs Computer') {
			updateContextState('player2', { ...player2, type: 'Computer' });
		}
		updateContextState('currentPage', 'Choose_Move');
	};

	return (
		<div className='container'>
			<div
				className={`container`}
				style={{
					padding: '1rem',
				}}
			>
				<span>{`Select play mode`}</span>
			</div>
			<div className={`container`}>
				{playModes.map(({ label }, index) => (
					<PlayModeButton
						label={label}
						selectedMode={(mode) => setSelectedMode(mode)}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default SelectPlayers;
