document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const getStartedButton = document.getElementById('getStartedButton');
    const messageForm = document.getElementById('messageForm');
    const confirmation = document.getElementById('confirmation');
    const userCount = document.getElementById('userCount');

    if (loader && getStartedButton) {
        setTimeout(() => {
            loader.style.display = 'none';
            getStartedButton.style.display = 'block';
        }, 3000); // Simulate loading for 3 seconds
    }

    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            messageForm.style.display = 'none';
            confirmation.style.display = 'block';
        });
    }

    if (userCount) {
        userCount.innerText = Math.floor(Math.random() * 900) + 100; // Random count between 100 and 999
    }
});


