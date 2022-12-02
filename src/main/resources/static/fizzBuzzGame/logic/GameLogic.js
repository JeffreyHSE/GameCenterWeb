export class GameLogic {

    userInput;
    userInputElement;
    resultMessage;

    constructor(userInput, userInputElement, resultMessage) {
    this.userInput = userInput;
    this.userInputElement = userInputElement;
    this.resultMessage = resultMessage;
    }

    userChoice() {
        this.userInputElement.innerHTML = `Number: (${(this.userInput)})`;
    }

    validate(userInput) {
    if (userInput > 100 || userInput < 0) {
        this.calculationOutput("Die Nummer <strong>" + userInput + "</strong> liegt nicht zwischen" + " 1-100!");
}

}
    calculationOutput(message) {
        this.resultMessage.innerHTML = `${message}`;
    }

    calculate(userInput) {
        if (userInput % 3 === 0 && userInput % 5 === 0) {
            return "FizzBuzz";
        }

        if (userInput % 3 === 0) {
            return "Fizz";
        }

        if (userInput % 5 === 0) {
            return "Buzz";
        }
        return this.calculationOutput(userInput);
    }
}