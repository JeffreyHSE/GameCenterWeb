import {userInput} from "../events/click.js";
import {Score} from "./Score.js";

export class GameLogic {

    computer_choice_array = ["✂️", "🪨", "📝"];

    score = new Score();

    constructor() {

    }

    userChoice() {
        let get_user_choice = document.getElementById("user_choice");
        let update_user_choice_frontend = get_user_choice.innerHTML.replace(get_user_choice.innerHTML[6], userInput);
        let update_data = document.createElement("p");
        update_data.setAttribute("id", "user_choice");
        update_data.innerHTML = update_user_choice_frontend;

        get_user_choice.replaceWith(update_data);

        console.log(update_user_choice_frontend);
    }

    randomizeArray() {
        this.computer_choice_array.sort((a, b) => 0.5 - Math.random());
    }

    computerChoice() {
        this.randomizeArray();
        console.log(this.computer_choice_array[0]);
        let get_computer_choice = document.getElementById("computer_choice");
        let update_computer_choice_frontend = get_computer_choice.innerHTML.replace(get_computer_choice.innerHTML[10], this.computer_choice_array[0]);
        let update_data = document.createElement("p");
        update_data.setAttribute("id", "computer_choice");
        update_data.innerHTML = update_computer_choice_frontend;

        get_computer_choice.replaceWith(update_data);

        console.log(update_computer_choice_frontend);
        this.winLogic();
    }

    determineWinner(message) {
        let get_winner_message = document.getElementById("decide_winner");
        let update_winner_message_frontend = get_winner_message.innerHTML.replace(get_winner_message.innerHTML, message);
        let update_data = document.createElement("p");
        update_data.setAttribute("id", "decide_winner");
        update_data.innerHTML = update_winner_message_frontend;

        get_winner_message.replaceWith(update_data);
    }

    winLogic() {
    let winner_msg;
    if (userInput === this.computer_choice_array[0]) {
    winner_msg = "Niemand hat gewonnen.. \uD83E\uDD1D";
    this.determineWinner(winner_msg);
    return "Niemand";
    }
    if (userInput === "✂️" && !this.computer_choice_array[0].includes("🪨")) {
        winner_msg = "User: " + "(" + userInput + ")" + " hat gewonnen.";
        this.determineWinner(winner_msg);
        this.score.addScoreToUser();
        return "User";
    }

    if (userInput === "🪨" && !this.computer_choice_array[0].includes("📝")) {
        winner_msg = "User: " + "(" + userInput + ")" + " hat gewonnen.";
        this.determineWinner(winner_msg);
        this.score.addScoreToUser();
        return "User";
    }

    if (userInput === "📝" && !this.computer_choice_array[0].includes("✂️")) {
        winner_msg = "User: " + "(" + userInput + ")" + " hat gewonnen.";
        this.determineWinner(winner_msg);
        this.score.addScoreToUser();

    } else {
        winner_msg = "Computer: " + "(" + this.computer_choice_array[0] + ")" + " hat gewonnen.";
        this.determineWinner(winner_msg);
        this.score.addScoreToComputer();
    }
    return "Computer";
    }
}