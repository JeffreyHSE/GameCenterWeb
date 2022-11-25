import {userInput} from "../events/click.js";

export class GameLogic {

    computer_choice_array = ["✂️", "🪨", "📝"];

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
    }


}