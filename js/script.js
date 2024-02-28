// Modo dark theme 


// letter typing    
function runTypingEffect() {

    const text = 'Soy, Freider Montaño.';
    const typingElement = document.querySelector('#typing-text');
    const typingDelay = 200;

    typeText(text, typingElement, typingDelay);
}


function typeText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}


document.addEventListener('DOMContentLoaded', runTypingEffect);