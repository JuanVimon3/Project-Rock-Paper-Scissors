let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = choices[randomIndex];

    document.getElementById('machine-choice').innerText = `Machine's choice: ${choice}`;
    return choice;
};

const getHumanChoice = (choice) => {
    console.log(`Human's choice: ${choice}`);
    document.getElementById("human-choice").innerText = `Your choice: ${choice}`;
    return choice;
};

const playRound = (humanChoice) => {
    const human = getHumanChoice(humanChoice);
    const computer = getComputerChoice();

    let winner = '';

    if (human === computer) {
        winner = 'It\'s a tie';
    } else if (
        (human === 'Rock' && computer === 'Scissors') ||
        (human === 'Paper' && computer === 'Rock') ||
        (human === 'Scissors' && computer === 'Paper')
    ) {
        winner = 'Human';
        humanScore += 1;
    } else {
        winner = 'Machine';
        computerScore += 1;
    }

    let finalWinner = '';
    if(humanScore === 5 || computerScore === 5){
        finalWinner = humanScore === 5 ? 'Human' : 'Machine';
        document.getElementById('restart-button'); 
    }

    document.getElementById('winner').innerText = `The winner is: ${winner}`;
    document.getElementById('human-score').innerText = `Human score is: ${humanScore}`;
    document.getElementById('computer-score').innerText = `Computer score is: ${computerScore}`;
    document.getElementById('final-winner').innerText = `The final winner is: ${finalWinner}`
};

document.getElementById('restart-button').addEventListener('click', function() {
    location.reload();
});
