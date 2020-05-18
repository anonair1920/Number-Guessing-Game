let remaining = 5;
let history = [];
let randomNum = Math.round(Math.random() * 100);

console.log(randomNum);

let time = 30;
let myTime;
function timecounting() {
    myTime = setInterval(() => {
        time--;
        document.getElementById('timecount').innerHTML = time;
        if (time <= 0) {
            gameOver('time');
        }
    }, 1000)
}
timecounting();

function timeOut() {
    clearInterval(myTime);
}

function gameOver(message) {
    timeOut();
    document.getElementById("guessButton").disabled = true;
    document.getElementById("gameResult").innerHTML = `you are out of ${message}`;
}

function guess() {
    let userInput = document.getElementById('input');
    remaining--;
    if (remaining < 0) {
        gameOver(remaining)
    }
    history.push(userInput.value);
    let message = '';

    if (userInput.value == randomNum) {
        message = 'Victory!';
    } else if (userInput.value > randomNum) {
        message = 'Lower!';
    } else if (userInput.value < randomNum) {
        message = 'Higher!';
    }

    document.getElementById('messageArea').innerHTML = message;
    document.getElementById('remainingArea').innerHTML = remaining;
    document.getElementById('historyArea').innerHTML = history;
    userInput.value = '';
    console.log(history);
    if (remaining < 0) {
        return;
    }
}

function reset() {
    time = 15;
    remaining = 5;
    history = [];
    randomNum = Math.round(Math.random() * 100);
    document.getElementById('timecount').innerHTML = time;
    document.getElementById("remainingArea").innerHTML = `${remaining}`;
    document.getElementById("messageArea").innerHTML = ``;
    document.getElementById("historyArea").innerHTML = `${history}`;
    document.getElementById("messageArea").innerHTML = ``;
    document.getElementById("guessButton").disabled = false;

    timecounting();
}