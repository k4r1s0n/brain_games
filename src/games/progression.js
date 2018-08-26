import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'What number is missing in this progression?';

const progressionLength = 10;

const game = () => {
  const start = 1;
  const difference = getRandomNum(1, 5); // difference beetween numbers
  const missedNum = getRandomNum(1, 10); // missed number position
  let question = '';
  const correctAnswer = String(start + (missedNum * difference));
  for (let i = 1; i <= progressionLength; i += 1) {
    if (missedNum === i) {
      question += ' .. ';
    } else {
      question += ` ${start + (difference * i)} `;
    }
  }
  return { question, correctAnswer };
};

export default () => makeGame(game, gameDescription);
