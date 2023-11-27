// counter.js

// Function to update the elapsed time
function updateElapsedTime() {
    // Calculate the time difference
    const currentTime = new Date().getTime();
    const elapsedTime = (currentTime - startTime) / 1000; // Convert to seconds

    // Update the displayed time
    elapsedTimeSpan.textContent = `${Math.floor(elapsedTime)} seconds`;
}

// Function to show elapsed time on hover
function showElapsedTime() {
    // Calculate the elapsed time
    const currentTime = new Date().getTime();
    const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

    // Update the displayed time immediately on hover
    elapsedTimeSpan.textContent = `${elapsedSeconds} seconds`;

    // Set up a timer to update the elapsed time every second
    timerId = setInterval(updateElapsedTime, 1000);
}

// Function to hide elapsed time on hover out
function hideElapsedTime() {
    // Stop the timer and resume the regular update
    clearInterval(timerId);
    updateElapsedTime();
}

// Get the element
const elapsedTimeSpan = document.getElementById('elapsedTimeCounter');

// Check if the start time is stored in localStorage
let startTime = parseInt(localStorage.getItem('websiteStartTime'));

// If not, set the start time and store it in localStorage
if (!startTime || isNaN(startTime)) {
    startTime = new Date().getTime();
    localStorage.setItem('websiteStartTime', startTime);
}

// Variable to store the timer ID
let timerId;

// Update the elapsed time every second
setInterval(updateElapsedTime, 1000);
