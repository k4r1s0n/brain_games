import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Answer "yes" if number is prime';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const game = () => {
  const question = getRandomNum(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => makeGame(game, gameDescription);
