// VARIABLES
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
guessField.focus(); // enfoca el cursor en el cuadro de texto


function checkGuess() {
    const stringUserGuess = guessField.value

    // CONDITIONALS
    if (stringUserGuess === "") {
        alert("Debes ingresar un número");
    } else {
        const userGuess = Number(stringUserGuess);

        if (guessCount === 1) {
            guesses.textContent = 'Intentos anteriores: ';
        }

        guesses.textContent += `${userGuess} `;

        if (userGuess === randomNumber) {
            lastResult.textContent = 'Felicidades! Adivinaste el número!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            setGameOver();
        
        } else if (guessCount === 10) {
            lastResult.textContent = '¡¡¡SE ACABARON LAS VIDAS!!!';
            lowOrHi.textContent = '';
            setGameOver();
        } else {
            lastResult.textContent = 'Equivocado!';
            lastResult.style.backgroundcolor = 'red';

            if (userGuess < randomNumber) {
                lowOrHi.textContent = 'Muy por debajo!';
            } else if (userGuess > randomNumber) {
                lowOrHi.textContent = 'Muy por encima!';
            }
        }

        guessCount++;
        guessField.value = '';
        guessField.focus()
    }
}


function setGameOver() {}

function resetGame() {}


guessSubmit.addEventListener("click", checkGuess);