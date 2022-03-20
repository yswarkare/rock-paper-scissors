import { useEffect } from 'react';
import Moves from '../../components/Moves/Moves';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import createResult from '../../utils/createResult';

const player2Moves = [
	{
		name: 'Rock',
		icon: 'rock-up',
	},
	{
		name: 'Paper',
		icon: 'paper-up',
	},
	{
		name: 'Scissor',
		icon: 'scissor-up',
	},
];

const ShowRsult = () => {
	const player1 = useContextState().player1;
	const player2 = useContextState().player2;
	const player1Move = useContextState().player1Move;
	const player2Move = useContextState().player2Move;
	const winner = useContextState().winner;
	const updateContextState = useUpdateContextState();

	useEffect(() => {
		let winner = createResult(player1Move?.name, player2Move?.name);
		console.log({ winner });
		updateContextState('winner', winner);
	}, []);

	const winnerType = (playerType) => {
		switch (playerType) {
			case 'Person':
				return 'You';
			case 'Computer':
				return 'Computer 2';
			default:
				return 'Computer 2';
		}
	};

	const returnToPage = (page) => {
		updateContextState('currentPage', page);
		updateContextState('winner', '');
		updateContextState('player1Move', '');
		updateContextState('player2Move', '');
	};

	return (
		<div className='container'>
			<div className='container'>
				{player1Move && (
					<div className='moves'>
						<Moves moves={[player1Move]} iconClass={`single-move`} />
					</div>
				)}
			</div>
			<div className='container'>
				<div className='container'>
					<span className='result-announcement'>
						{winner === 'player2'
							? `${winnerType(player2.type)} Win`
							: winner === 'player1'
							? `${winnerType(player2.type)} Lose`
							: 'Draw'}
					</span>
				</div>
			</div>
			<div className='container'>
				<div className='return-options'>
					<button
						className='return-button'
						onClick={() => {
							returnToPage('Choose_Move');
						}}
					>{`Play Again`}</button>
					<button
						className='return-button'
						onClick={() => {
							returnToPage('Select_Players');
						}}
					>{`Change Mode`}</button>
				</div>
			</div>
			<div className='container'>
				<div className='moves'>
					<Moves moves={player2Moves} selected={player2Move} />
				</div>
			</div>
		</div>
	);
};

export default ShowRsult;
