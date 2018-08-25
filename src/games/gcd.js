import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers';
const gcd = (firstNum, secondNum) => {
  let num1 = firstNum;
  let num2 = secondNum;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) num1 %= num2;
    else num2 %= num1;
  }
  return num1 + num2;
};
const game = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};
const gcdBrainGame = () => makeGame(game, gameDescription);
export default gcdBrainGame;
