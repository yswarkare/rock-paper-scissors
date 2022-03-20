const findWinner = (player1Move, player2Move) => {
	if (player1Move === 'Rock' && player2Move === 'Paper') return 'player2';

	if (player1Move === 'Rock' && player2Move === 'Scissor') return 'player1';

	if (player1Move === 'Paper' && player2Move === 'Scissor') return 'player2';

	if (player1Move === 'Paper' && player2Move === 'Rock') return 'player1';

	if (player1Move === 'Scissor' && player2Move === 'Rock') return 'player2';

	if (player1Move === 'Scissor' && player2Move === 'Paper') return 'player1';
};

const createResult = (player1Move, player2Move) => {
	if (player1Move !== player2Move) {
		let result = findWinner(player1Move, player2Move);
		return result;
	} else {
		return 'draw';
	}
};

export default createResult;
