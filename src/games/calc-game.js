import makeGame from '..';

const description = 'What is the result of the expression?';
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const calc = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const numToPickExpression = getRandomNum(1, 100);
  let question;
  let correctAnswer;
  switch (numToPickExpression) {
    case numToPickExpression < 33: //  33 - expression probability
      question = `${firstNum} + ${secondNum}`;
      correctAnswer = firstNum + secondNum;
      break;
    case numToPickExpression < 66:
      question = `${firstNum} - ${secondNum}`;
      correctAnswer = firstNum - secondNum;
      break;
    default:
      question = `${firstNum} * ${secondNum}`;
      correctAnswer = firstNum * secondNum;
      break;
  }
  return { question, correctAnswer: String(correctAnswer) };
};
const calcGame = () => makeGame(calc, description);
export default calcGame;
