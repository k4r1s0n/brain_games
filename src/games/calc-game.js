import { makeGame, getNum } from '..';

const description = 'What is the result of the expression?';

const calc = () => {
  const firstNum = getNum();
  const secondNum = getNum();
  const getNumForExpression = getNum();
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
