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

const showDice = () => {
  show("none", "block", "none", "block", "none");
  const form = document.querySelector("#form1").reset ();
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

const btnChooseDice = () => {
  console.log("parentElement");
  console.log(document.querySelector("#s1").parentElement.parentElement);
  console.log("parentNode");
  console.log(document.querySelector("#s1").parentNode.parentNode.chi);
  let dicePoint;
  const diceLocation = document.querySelector("#s1");
  const oxAnswer = document.querySelector("#s3");

  console.log(userChooseDice);
  dicePoint = Math.floor(Math.random() * 6 + 1);
  diceLocation.innerHTML = `<img src="./image/${dicePoint}.png">`;
  show("block", "none", "block", "none", "block");

  if(userChooseDice == dicePoint){
    oxAnswer.innerHTML = `<img src="./image/o.png">`;
  }
  else{
    oxAnswer.innerHTML = `<img src="./image/x.png">`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  show("none", "block", "none", "block", "none");
});