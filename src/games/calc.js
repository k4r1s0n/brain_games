import makeGame from '..';
import getRandomNum from '../utils';

const gameDescription = 'What is the result of the expression?';
const game = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const numToPickExpression = getRandomNum(1, 100);
  let question;
  let correctAnswer;
  switch (numToPickExpression) {
    case numToPickExpression < 33: //  33 - expression probability
      question = `${firstNum} + ${secondNum}`;
      correctAnswer = String(firstNum + secondNum);
      break;
    case numToPickExpression < 66:
      question = `${firstNum} - ${secondNum}`;
      correctAnswer = String(firstNum - secondNum);
      break;
    default:
      question = `${firstNum} * ${secondNum}`;
      correctAnswer = String(firstNum * secondNum);
      break;
  }
  return { question, correctAnswer };
};
const calcGame = () => makeGame(game, gameDescription);
export default calcGame;
