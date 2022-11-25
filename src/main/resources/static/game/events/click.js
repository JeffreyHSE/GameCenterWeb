import { GameLogic } from '../logic/GameLogic.js';

let get_scissors = document.getElementById("scissor_btn");
let get_stone = document.getElementById("stone_btn");
let get_paper = document.getElementById("paper_btn");

const logic = new GameLogic();

let userInput;

async function disableAllButtons() {
    get_scissors.setAttribute("disabled", "enabled")
    get_stone.setAttribute("disabled", "enabled");
    get_paper.setAttribute("disabled", "enabled");
}


get_scissors.addEventListener("click", async e => {
    userInput = get_scissors.innerHTML;
    logic.userChoice();
    logic.computerChoice();
    await disableAllButtons();
});

get_stone.addEventListener("click", async e => {
    userInput = get_stone.innerHTML;
    logic.userChoice();
    logic.computerChoice();
    await disableAllButtons();
});

get_paper.addEventListener("click", async e => {
    userInput = get_paper.innerHTML;
    logic.userChoice();
    logic.computerChoice();
    await disableAllButtons();
});
export {userInput};