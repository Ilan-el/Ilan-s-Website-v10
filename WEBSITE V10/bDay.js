document.addEventListener('DOMContentLoaded', function () {
    function updateTimer() {
        // Specify the start date (January 18, 2008)
        const startDate = new Date('January 18, 2008');

        // Get the current date
        const currentDate = new Date();

        // Calculate the time difference in milliseconds
        const timeDifference = currentDate - startDate;

        // Convert milliseconds to seconds, minutes, hours, days, and years
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const years = Math.floor(days / 365);

        // Update the HTML element with the calculated values
        document.getElementById('timeDifference').innerText = `${years} years, ${days % 365} days, ${hours % 24} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
    }

    // Call the updateTimer function every second
    setInterval(updateTimer, 1000);

    // Initial call to display the time difference immediately
    updateTimer();
});
