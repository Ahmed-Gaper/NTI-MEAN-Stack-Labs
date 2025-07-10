document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('dateInput');
    const getDayButton = document.getElementById('getDayButton');
    const resultDiv = document.getElementById('result');

    // Set a default value for the date input for better UX
    dateInput.valueAsDate = new Date();

    function getDayName(dateString) {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // The 'YYYY-MM-DD' format from <input type="date"> is parsed as midnight UTC.
        // Using getUTCDay() is crucial to get the correct day regardless of the user's local timezone.
        const date = new Date(dateString);
        return dayNames[date.getUTCDay()];
    }

    getDayButton.addEventListener('click', () => {
        const dateString = dateInput.value;
        if (dateString) {
            const dayName = getDayName(dateString);
            resultDiv.textContent = `That day is a ${dayName}.`;
        } else {
            resultDiv.textContent = 'Please select a date.';
        }
    });
});