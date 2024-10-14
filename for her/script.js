document.getElementById('yes-btn').addEventListener('click', function() {
    // Create heart element
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Position the heart randomly within the container
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random duration between 3 and 5 seconds
    
    // Append to the hearts-animation container
    document.getElementById('hearts-animation').appendChild(heart);
    
    // Remove the heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);

    // Hide the instruction text
    document.getElementById('tap-instruction').style.display = 'none';

    // Play the song
    const song = document.getElementById('background-song');
    song.muted = false;  // Unmute the song
    song.play().catch(error => {
        console.log('Error playing song:', error);
    });
});

// Flag to track user interaction
let userInteracted = false;

// Detect any user interaction
window.addEventListener('click', () => {
    userInteracted = true;
});

// Observe when memory gallery comes into view
const memoryGallery = document.querySelector('.memory-gallery');
const song = document.getElementById('background-song');

const options = {
    root: null,  // viewport
    threshold: 0.5  // 50% of the section is visible
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && userInteracted) {
            song.muted = false;  // Unmute the song when section is visible
            song.volume = 1;  // Set volume to full when section is visible
            song.play().catch(error => {
                console.log('Error playing song:', error);
            });
        } else {
            song.volume = 0.3;  // Lower volume when section is not visible
        }
    });
};

// Create an observer
const observer = new IntersectionObserver(callback, options);
observer.observe(memoryGallery);
