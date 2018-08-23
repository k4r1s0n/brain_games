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
  welcomeMessage();
  console.log(`${message}\n`);
  const name = getName();
  for (let i = 0; i !== 3; i += 1) {
    const { question, correctAnswer } = func();
    askQuestion(question);
    const answer = getAnswer();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      isWrongAnswer(answer, correctAnswer);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
