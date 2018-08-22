import readlineSync from 'readline-sync';

export const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!');
};
export const getName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}! \n`);
  return userName;
};
export const getNum = () => Math.floor((Math.random() * 100) + 1);
const askQuestion = str => console.log(`Question: ${str}`);
const getAnswer = () => readlineSync.question('Your answer: ');
const isWrongAnswer = (answer, correctAnswer) => console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
export const makeGame = (func, message) => {
  let counter = 0;
  welcomeMessage();
  console.log(`${message}\n`);
  const name = getName();
  while (counter !== 3) {
    const gameInfo = func();
    askQuestion(gameInfo.question);
    const answer = getAnswer();
    if (answer === gameInfo.correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } else {
      isWrongAnswer(answer, gameInfo.correctAnswer);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
