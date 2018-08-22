#!/usr/bin/env node
import { makeGame, getNum } from '..';

const message = 'Answer "yes" if number even otherwise answer "no".';
const yesOrNo = randNumb => (randNumb % 2 === 0 ? 'yes' : 'no');
const game = () => {
  const number = getNum();
  return { question: number, correctAnswer: yesOrNo(number) };
};
const evenGame = () => makeGame(game, message);
evenGame();
