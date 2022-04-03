const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('div.choices > div.choice')
const choices = ['rock', 'paper', 'scissors']
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const modal = document.querySelector('.modal')
const restart = document.getElementById('restart')
let userChoice
let computerChoice
let userScore = 0
let computerScore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    userChoice = possibleChoice.id
    generateComputerChoice()
    getresult()
}))

function generateComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]
}

function getresult() {
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            resultDisplay.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Computer choose <strong>${computerChoice}</strong></p>`;
            userScore++
            userScoreDisplay.innerHTML = userScore.toString()
            modal.style.display = 'block';
            break
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            resultDisplay.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Computer choose <strong>${computerChoice}</strong></p>`;
            computerScore++
            computerScoreDisplay.innerHTML = computerScore.toString()
            modal.style.display = 'block';
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${computerChoice}</strong></p>`;
            modal.style.display = 'block';
            break
    }
}

function closeModal(e) {
    if (e.target === modal) {
        modal.style.display = "none"
    }
}

function restartGame() {
    userScore = 0
    computerScore = 0
    userScoreDisplay.innerHTML = userScore.toString()
    computerScoreDisplay.innerHTML = computerScore.toString()
}

window.addEventListener('click', closeModal)
restart.addEventListener('click', restartGame)
