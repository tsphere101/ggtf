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
document.getElementById('main-buton').addEventListener('click', function () {
    // Check if mainRoseDiv already exists
    if (document.getElementById('main-rose-div')) {
        return; // Exit the function if it already exists
    }

    // Create the main div element only if it doesn't exist
    const mainRoseDiv = document.createElement('div');
    mainRoseDiv.id = 'main-rose-div';

    // Create the image element
    const mainRoseImg = document.createElement('img');
    mainRoseImg.id = 'main-rose';
    mainRoseImg.className = 'rose-2';
    mainRoseImg.src = 'https://static.vecteezy.com/system/resources/thumbnails/027/191/064/small_2x/pixel-art-red-rose-icon-png.png';
    mainRoseImg.alt = 'Animated Image';

    // Append the image to the div
    mainRoseDiv.appendChild(mainRoseImg);

    // Append the div to the body of the document
    document.body.appendChild(mainRoseDiv);

    // const imageContainer = document.getElementById('main-rose-div');
    // const mainRoseDiv = document.getElementById('main-rose');
    mainRoseDiv.classList.add('slide-up-animation');
    mainRoseDiv.style.opacity = 1; // Make the container visible before animation starts
    mainRoseDiv.style.display = 'block'; // Make the container visible before animation starts
});
