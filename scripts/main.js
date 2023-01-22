/* 문제 자율 연습
const initDice = () => {
  const dice = document.querySelector("#div-dice");
  let dicePoint = Math.floor(Math.random()*6+1);
  console.log(dicePoint);
  dice.innerHTML = `<img src="/image/${dicePoint}.png">`;
}

const addDice = () => {
  const btn = document.querySelector("button");
  const dice = document.querySelector("#div-dice");
  console.log(btn);

  btn.addEventListener("click", () => {
    let dicePoint = Math.floor(Math.random()*6+1);
    console.log(dicePoint);
    console.log(`<img src="./image/${dicePoint}.png">`);
    dice.innerHTML = `<img src="./image/${dicePoint}.png">`;
  });
};

const addButton = () => {
  const btn = document.createElement("button");
  document.querySelector("#content").append(btn);
};
*/

let userChooseDice;
let winCounter, loseCounter;

const showDice = () => {
  show("none", "block", "none", "block", "none");
  const form = document.querySelector("#gameForm").reset ();
};

const show = (dspS1, dspS2, dspS3, dspBt1, dspBt2) => {
  const s1 = document.querySelector("#s1");
  const s2 = document.querySelector("#s2");
  const s3 = document.querySelector("#s3");
  const bt1 = document.querySelector("#bt1");
  const bt2 = document.querySelector("#bt2");
  

  s1.style.display = dspS1;
  s2.style.display = dspS2;
  s3.style.display = dspS3;
  bt1.style.display = dspBt1;
  bt2.style.display = dspBt2;
};

const getDicePoint = (dicePoint) => {
  userChooseDice = dicePoint;
};

const dropDiceButton = () => {
  const dropDiceButtonObject = document.querySelector("#dropDiceButton");
  dropDiceButtonObject.remove(self);
  show("none", "block", "none", "block", "none");
};

const btnChooseDice = () => {
  let dicePoint;
  const diceLocation = document.querySelector("#s1");
  const oxAnswer = document.querySelector("#s3");
  const scoreBoardGame = document.querySelector("#scoreBoard-Game");
  const scoreBoardWin = document.querySelector("#scoreBoard-Win");
  const scoreBoardLose = document.querySelector("#scoreBoard-Lose");
  const scoreBoardRate = document.querySelector("#scoreBoard-Rate");

  console.log(userChooseDice);
  dicePoint = Math.floor(Math.random() * 6 + 1);
  diceLocation.innerHTML = `<img src="./image/${dicePoint}.png">`;
  show("block", "none", "block", "none", "block");

  if(userChooseDice == dicePoint){
    oxAnswer.innerHTML = `<img src="./image/o.png">`;
    winCounter++;
    scoreBoardGame.innerHTML = `Game : ${winCounter+loseCounter}`;
    scoreBoardWin.innerHTML = `Win : ${winCounter}`;
    scoreBoardLose.innerHTML = `Lose : ${loseCounter}`;
    scoreBoardRate.innerHTML = `Rate : ${Math.round((winCounter/(winCounter+loseCounter))*100)}%`;
  }
  else{
    oxAnswer.innerHTML = `<img src="./image/x.png">`;
    loseCounter++;
    scoreBoardGame.innerHTML = `Game : ${winCounter+loseCounter}`;
    scoreBoardWin.innerHTML = `Win : ${winCounter}`;
    scoreBoardLose.innerHTML = `Lose : ${loseCounter}`;
    scoreBoardRate.innerHTML = `Rate : ${Math.round((winCounter/(winCounter+loseCounter))*100)}%`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  show("none", "none", "block", "none", "none");
  winCounter = 0;
  loseCounter = 0;
});