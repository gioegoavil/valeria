const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const song = document.getElementById('song');
// Generar corazones brillantes que caen
const heartContainer = document.querySelector('.heart-container');

function createFallingHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart-falling');
    heart.style.left = Math.random() * 100 + "vw"; // Establecer la posición horizontal de forma aleatoria
    heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Duración de la animación aleatoria
    heart.style.fontSize = Math.random() * 10 + 20 + "px"; // Tamaño aleatorio de los corazones
    heartContainer.appendChild(heart);
}

// Crear corazones cada 300ms
setInterval(createFallingHearts, 300);

document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") || 
        e.target.matches(".tap-right") || 
        e.target.matches(".tap-left") || 
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
        
        if (!letter.classList.contains('opened')) {
            setTimeout(() => {
                letter.classList.add('letter-opening');

                setTimeout(() => {
                    letter.classList.remove('letter-opening');
                    letter.classList.add('opened');
                    
                    // Reproducir la canción cuando la carta se abre
                    song.play();
                }, 500);
            }, 1000);
        }
    } else if (e.target.matches(".envelope *") ) {
        envelope.classList.remove('flap');
        if (letter.classList.contains("opened")) {
            letter.classList.add("closing-letter");
            setTimeout(() => {
                letter.classList.remove("closing-letter");
                letter.classList.remove("opened");
            }, 500);
        }
    }
});
