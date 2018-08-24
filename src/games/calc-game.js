import makeGame from '..';

const description = 'What is the result of the expression?';
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const calc = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const getNumForExpression = getRandomNum(1, 100);
  let question = '';
  let correctAnswer = null;
  if (getNumForExpression < 33) {
    question = `${firstNum} + ${secondNum}`;
    correctAnswer = firstNum + secondNum;
  } else if (getNumForExpression < 66) {
    question = `${firstNum} - ${secondNum}`;
    correctAnswer = firstNum - secondNum;
  } else {
    question = `${firstNum} * ${secondNum}`;
    correctAnswer = firstNum * secondNum;
  }
  return { question, correctAnswer: String(correctAnswer) };
};
const calcGame = () => makeGame(calc, description);
export default calcGame;
