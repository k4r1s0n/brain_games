import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'Balance the given number';

const balance = (num) => {
  const sumOfNum = String(num).split('').reduce((sum, current) => sum + Number(current), 0);
  const qtyOfNum = String(num).length;
  const startNum = Math.floor(sumOfNum / Number(qtyOfNum));
  let base = String(startNum).repeat(qtyOfNum);
  let remains = sumOfNum - String(base).split('').reduce((sum, current) => sum + Number(current), 0);
  for (let i = qtyOfNum - 1; i >= 0; i -= 1) {
    if (remains > 0) {
      base = base.substr(0, i) + String(Number(base[i]) + 1) + base.substr(i + 1);
      remains -= 1;
    }
  }
  return base;
};

const game = () => {
  const question = getRandomNum(1, 10000);
  const correctAnswer = balance(question);
  return { question, correctAnswer };
};

export default () => makeGame(game, gameDescription);
