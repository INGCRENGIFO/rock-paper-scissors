const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getresult()
}))

function generateComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult() {
    switch (userChoice + computerChoice) {
        case 'paperrock':
        case 'scissorspaper':
        case 'rockscissors':
            resultDisplay.innerHTML = 'you win!'
            break
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            resultDisplay.innerHTML = 'you lose!'
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.innerHTML = 'it\'s a draw!'
            break
    }
}