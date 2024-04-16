document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggle');

    // Check if the toggleSwitch element exists
    if (toggleSwitch) {
        // Function to toggle dark mode
        function toggleDarkMode() {
            const body = document.body;
            body.classList.toggle('dark-mode');
        }

        // Dark mode toggle event listener
        toggleSwitch.addEventListener('change', function () {
            toggleDarkMode();
        });
    } else {
        console.log("Logic script is executed.");
    }
});



