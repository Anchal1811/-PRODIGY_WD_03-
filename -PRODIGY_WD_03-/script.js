// script.js

let startTime, updatedTime, difference;
let tInterval; // Timer interval
let running = false; // Is the stopwatch running?
let paused = false; // Is the stopwatch paused?

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// Start the stopwatch
startBtn.addEventListener('click', () => {
    if (!running) {
        startTime = new Date().getTime(); // Get current time
        tInterval = setInterval(updateTime, 1000); // Update every second
        running = true;
        paused = false;
        startBtn.textContent = "Pause";
    } else {
        clearInterval(tInterval);
        running = false;
        paused = true;
        startBtn.textContent = "Resume";
    }
});

// Stop the stopwatch
stopBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    paused = false;
    startBtn.textContent = "Start";
});

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    running = false;
    paused = false;
    startBtn.textContent = "Start";
    display.textContent = "00:00:00";
    difference = 0;
});

// Update the time display
function updateTime() {
    updatedTime = new Date().getTime(); // Get current time
    difference = updatedTime - startTime; // Calculate difference

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    display.textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
