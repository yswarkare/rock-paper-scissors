import player2Moves from "./player2Moves";

const createComputerMove = () => {
  const random = parseInt(Math.random() * 100);
  console.log({ random });
  if (random <= 33) {
    return player2Moves[0];
  }
  if (34 <= random && random <= 66) {
    return player2Moves[1];
  }
  if (67 <= random) {
    return player2Moves[2];
  }
}

export default createComputerMove;