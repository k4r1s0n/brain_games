import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'What number is missing in this progression?';

const game = () => {
  const first = 1;
  const difference = getRandomNum(1, 5);
  const progressionLength = 10;
  const xLocation = getRandomNum(1, 10);
  let correctAnswer;
  let question = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    if (xLocation === i) {
      correctAnswer = String(first + (difference * i));
      question += ' .. ';
    } else {
      question += ` ${first + (difference * i)} `;
    }
  }
  return { question, correctAnswer };
};

export default () => makeGame(game, gameDescription);
