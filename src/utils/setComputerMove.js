import player1Moves from "./player1Moves";

const setComputerMove = (player2Move) => {
  const random = parseInt(Math.random() * 100);
  const restMoves = player1Moves.filter(({name})=> name !== player2Move);
  console.log({ random });
  if (random <= 50) {
    return restMoves[0]
  } else {
    return restMoves[1]
  }
}

// const setComputerMove = (player2Move) => {
//   const random = parseInt(Math.random() * 100);
//   console.log({ random });
//   if (random <= 33) {
//     return player1Moves[0];
//   }
//   if (34 <= random && random <= 66) {
//     return player1Moves[1];
//   }
//   if (67 <= random) {
//     return player1Moves[2];
//   }
// }

export default setComputerMove;