import React from 'react';

const Move = ({
	name,
	icon,
	iconClass,
	selected,
	disabled,
	playerType = '',
	onClick = () => {},
}) => {
	return (
		<div
			className={`${iconClass} ${selected}`}
			onClick={(e) => {
				if (playerType !== 'Computer') {
					onClick(name, e);
				}
			}}
		>
			<i
				className={`player-move ${icon}`}
				style={{
					opacity: disabled ? '50%' : '100%',
					cursor: playerType === 'Person' ? 'pointer' : 'default',
				}}
			/>
		</div>
	);
};

export default Move;
