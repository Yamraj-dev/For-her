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
});
