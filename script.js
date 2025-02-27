document.getElementById('candle-button').addEventListener('click', function() {
    const animationDiv = document.getElementById('animation');
    animationDiv.innerHTML += '<p>🕯️ Candle is lit!</p>';
});

document.getElementById('balloon-button').addEventListener('click', function() {
    const animationDiv = document.getElementById('animation');
    animationDiv.innerHTML += '<p>🎈 A balloon is released!</p>';
});

document.getElementById('wish-button').addEventListener('click', function() {
    const animationDiv = document.getElementById('animation');
    animationDiv.innerHTML += '<p>💌 Wishing you all the happiness in the world!</p>';
});
