export class Score {

    userScore = 0;
    computerScore = 0;

    constructor() {
    }

    addScoreToUser() {
        this.userScore += 1;
        let get_userScore = document.getElementById("user_score");
        let update_userScore_frontend = get_userScore.innerHTML.replace(get_userScore.innerHTML[6], this.userScore.toString());
        let update_data = document.createElement("p");
        update_data.setAttribute("id", "user_score");
        update_data.innerHTML = update_userScore_frontend;

        get_userScore.replaceWith(update_data);
    }

    addScoreToComputer() {
        this.computerScore += 1;
        let get_computerScore = document.getElementById("computer_score");
        let update_computerScore_frontend = get_computerScore.innerHTML.replace(get_computerScore.innerHTML[10], this.computerScore.toString());
        let update_data = document.createElement("p");
        update_data.setAttribute("id", "computer_score");
        update_data.innerHTML = update_computerScore_frontend;

        get_computerScore.replaceWith(update_data);
    }
}