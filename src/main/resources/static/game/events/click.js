import { GameLogic } from '../logic/GameLogic.js';

let get_scissors = document.getElementById("scissor_btn");
let get_stone = document.getElementById("stone_btn");
let get_paper = document.getElementById("paper_btn");

const logic = new GameLogic();

let userInput = null;


get_scissors.addEventListener("click", e => {
    userInput = get_scissors.innerHTML;
    logic.userChoice();
    console.log(userInput);
});

get_stone.addEventListener("click", e => {
    userInput = get_stone.innerHTML;
    console.log(userInput);
});

get_paper.addEventListener("click", e => {
    userInput = get_paper.innerHTML;
    console.log(userInput);
});
export {userInput};