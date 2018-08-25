import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no"';
const isEven = num => num % 2 === 0;
const game = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const evenGame = () => makeGame(game, gameDescription);
export default evenGame;
