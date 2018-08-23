import { makeGame, getNum } from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const game = () => {
  const question = getNum();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
const evenGame = () => makeGame(game, description);
export default evenGame;
