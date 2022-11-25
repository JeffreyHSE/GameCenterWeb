import { GameLogic } from '../logic/GameLogic.js';

let get_scissors = document.getElementById("scissor_btn");
let get_stone = document.getElementById("stone_btn");
let get_paper = document.getElementById("paper_btn");

const logic = new GameLogic();

let userInput;

get_scissors.addEventListener("click", async e => {
    userInput = get_scissors.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});

get_stone.addEventListener("click", async e => {
    userInput = get_stone.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});

get_paper.addEventListener("click", async e => {
    userInput = get_paper.innerHTML;
    logic.userChoice();
    logic.computerChoice();
});
export {userInput};