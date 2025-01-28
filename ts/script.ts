// Countdown timer
const launchDate = new Date('2024-01-01T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdown = document.getElementById('countdown');
    if (countdown) {
        countdown.innerHTML = `
            <div class="countdown-item">${days}<span>Days</span></div>
            <div class="countdown-item">${hours}<span>Hours</span></div>
            <div class="countdown-item">${minutes}<span>Minutes</span></div>
            <div class="countdown-item">${seconds}<span>Seconds</span></div>
        `;
    }

    if (distance < 0) {
        clearInterval(countdownInterval);
        if (countdown) countdown.innerHTML = "LAUNCHED!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Email contact
document.querySelectorAll('.email-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'mailto:aquachord.art@gmail.com';
    });
});