export class GameLogic {

    computer_choice_array = ["✂️", "🪨", "📝"];

    score
    userChoiceElement;
    userInput;
    computerChoiceElement;
    computerInput;
    determineWinnerElement;

    constructor(userChoiceElement, computerChoiceElement, determineWinnerElement, score, userInput, computerInput) {
    this.userChoiceElement = userChoiceElement;
    this.userInput = userInput;
    this.computerInput = computerInput;
    this.computerChoiceElement = computerChoiceElement;
    this.determineWinnerElement = determineWinnerElement;
    this.score = score;
    }


    userChoice() {
        this.userChoiceElement.innerHTML = `User: (${(this.userInput)})`
    }

    randomizeArray() {
        this.computer_choice_array.sort((a, b) => 0.5 - Math.random());
    }

    computerChoice() {
        this.randomizeArray();
        this.computerChoiceElement.innerHTML = `Computer: (${this.computer_choice_array[0]})`;
        this.winLogic();
    }

    determineWinner(message) {
        this.determineWinnerElement.innerHTML = `${message}`
    }

    winLogic() {
        let winner_msg;
        if (this.userInput === this.computer_choice_array[0]) {
            winner_msg = "Niemand hat gewonnen.. \uD83E\uDD1D";
            this.determineWinner(winner_msg);
            return "Niemand";
        }
        if (this.userInput === "✂️" && !this.computer_choice_array[0].includes("🪨")) {
            winner_msg = "User: " + "(" + this.userInput + ")" + " hat gewonnen.";
            this.determineWinner(winner_msg);
            this.score.addScoreToUser();
            return "User";
        }

        if (this.userInput === "🪨" && !this.computer_choice_array[0].includes("📝")) {
            winner_msg = "User: " + "(" + this.userInput + ")" + " hat gewonnen.";
            this.determineWinner(winner_msg);
            this.score.addScoreToUser();
            return "User";
        }

        if (this.userInput === "📝" && !this.computer_choice_array[0].includes("✂️")) {
            winner_msg = "User: " + "(" + this.userInput + ")" + " hat gewonnen.";
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