import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if number is prime';

const prime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const game = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = prime(question);
  return { question, correctAnswer };
};

export default () => makeGame(game, gameDescription);
