import { useEffect, useState } from 'react';
import Moves from '../../components/Moves/Moves';
import Timer from '../../components/Timer/Timer';
import { useContextState, useUpdateContextState } from '../../hooks/ContextState';
import createComputerMove from '../../utils/createComputerMove';
import player2Moves from '../../utils/player2Moves';
import setComputerMove from '../../utils/setComputerMove';

const ChooseMove = () => {
	const player1 = useContextState().player1;
	const player2 = useContextState().player2;
	const player1Move = useContextState().player1Move;
	const player2Move = useContextState().player2Move;
	const updateContextState = useUpdateContextState();
	const [showPlayer1Move, setShowPlayer1Move] = useState(true);
	const [stopTimer, setStopTimer] = useState(false);

	useEffect(() => {
		updateContextState('player1Move', undefined);
		updateContextState('player2Move', undefined);
		setShowPlayer1Move(false);
	}, []);

	useEffect(() => {
		if (player2.type === 'Computer') {
			setTimeout(() => {
				updateContextState('player2Move', createComputerMove());
				setTimeout(() => {
					setStopTimer(true);
				}, 250);
			}, 2000);
		}
	}, [player2.type]);

	const setSelectedMove = (selected) => {
		updateContextState(
			'player2Move',
			player2Moves.find(({ name }) => name === selected)
		);
		setStopTimer(true);
	};

	const timerStopped = () => {
		console.log('timer stopped');
		setShowPlayer1Move(true);
		let computerMove = setComputerMove(player2Move?.name);
		updateContextState('player1Move', computerMove);
		updateContextState('currentPage', 'Result');
	};

	return (
		<div className='container'>
			<div className='container'>
				{!showPlayer1Move && (
					<Timer
						startTimer={true}
						stopTimer={stopTimer}
						timerStopped={() => {
							timerStopped();
						}}
					/>
				)}
			</div>
			<div className='container'>
				{showPlayer1Move && player1Move && (
					<div className='moves'>
						<Moves moves={[player1Move]} iconClass={`single-move`} />
					</div>
				)}
			</div>
			<div className='container'>
				<div className='player-name'>{player1.type}</div>
				<div className='player-divider'>{''}</div>
				<div className='player-name'>{player2.type}</div>
			</div>
			<div className='container'>
				<span className='primary-text'>{`Choose your move`}</span>
				<div className='moves'>
					<Moves
						moves={player2Moves}
						selected={player2Move}
						playerType={player2?.type}
						getSelected={(selected) => {
							setSelectedMove(selected);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ChooseMove;
