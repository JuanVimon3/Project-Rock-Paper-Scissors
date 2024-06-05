const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const choice = choices[randomIndex];

    document.getElementById('machine-choice').innerText = `Machine's choice: ${choice}`;
    return choice;
};

const getHumanChoice = (choice) => {
    console.log(`Human's choice: ${choice}`);
    document.getElementById("human-choice").innerText= `Your choice: ${choice}`
};

// Llamar a getComputerChoice para obtener la elección de la máquina al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    getComputerChoice();
});
