import Move from '../Move/Move';

const Moves = ({
	moves = [],
	selected = {},
	playerType,
	moveClass,
	iconClass = '',
	getSelected = () => {},
}) => {
	return (
		<>
			{moves.map(({ name, icon }, index) => (
				<div className={`player-move ${moveClass}`} key={index}>
					<Move
						name={name}
						selected={name === selected?.name}
						icon={icon}
						iconClass={iconClass}
						onClick={(name) => {
							getSelected(name);
						}}
						playerType={playerType}
						disabled={selected?.name && name !== selected?.name ? true : false}
						key={index}
					/>
				</div>
			))}
		</>
	);
};

export default Moves;
