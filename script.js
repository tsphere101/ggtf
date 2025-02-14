function createConfetti() {
    const colors = ['#ff6f61', '#6b5b93', '#88b04b', '#f7cac9', '#92a8d1', '#955251', '#b9d3c1'];
    const confettiCount = 100; // Number of confetti pieces

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.top = 0
        confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration

        document.body.appendChild(confetti);

        // Remove confetti after animation ends
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}
