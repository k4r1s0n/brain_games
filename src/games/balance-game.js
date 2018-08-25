import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Balance the given number.';

const balance = (arr) => {
  const workArr = arr.slice().sort((a, b) => a - b);
  if (workArr[workArr.length - 1] - workArr[0] <= 1) return workArr;
  workArr[0] += 1;
  workArr[workArr.length - 1] -= 1;
  return balance(workArr);
};

const game = () => {
  const question = String(getRandomNum(1, 100)) + String(getRandomNum(1, 100));
  const numbArr = question.split('').map(item => Number(item));
  const correctAnswer = balance(numbArr).join('');
  return { question, correctAnswer };
};

const balanceBrainGame = () => makeGame(game, gameDescription);

export default balanceBrainGame;
