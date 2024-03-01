function scrollReveal() {
    window.sr = ScrollReveal();

    sr.reveal('.role', {
        duration: 2500,
        origin: 'bottom',
        distance: '100px',
    });
    sr.reveal('.social', {
        duration: 2500, // Reducido de 3000 a 1500
        origin: 'bottom',
        distance: '100px',
    });

    sr.reveal('.scroll-about-text', {
        duration: 2500, // Reducido de 4000 a 2000
        origin: 'right',
        distance: '400px',
    });
    sr.reveal('.portafolio-Scrolltitle', {
        duration: 3000, // Reducido de 7000 a 3000
        origin: 'top',
        distance: '400px',
    });
    sr.reveal('.portafolio-ScrollCard', {
        duration: 2000, // Reducido de 4000 a 2000
        origin: 'left',
        distance: '400px',
    });
    sr.reveal('.portafolio-ScrollCard2', {
        duration: 2000, // Reducido de 4000 a 2000
        origin: 'top',
        distance: '400px',
    });
    sr.reveal('.portafolio-ScrollCard3', {
        duration: 2000, // Reducido de 4000 a 2000
        origin: 'right',
        distance: '400px',
    });
    sr.reveal('.portafolio-ScrollCard4', {
        duration: 2000, // Reducido de 4000 a 2000
        origin: 'bottom',
        distance: '400px',
    });
    sr.reveal('.scroll-about-li1', {
        duration: 3000, // Reducido de 4000 a 2000
        origin: 'left',
        distance: '400px',
    });
    sr.reveal('.scroll-about-li2', {
        duration: 3500, // Reducido de 8000 a 3000
        origin: 'left',
        distance: '400px',
    });
    sr.reveal('.scroll-p', {
        duration: 4000, // Reducido de 9000 a 3000
        origin: 'left',
        distance: '400px',
    });
    sr.reveal('.scrollCard-left', {
        duration: 3500, // Reducido de 9000 a 3000
        origin: 'left',
        distance: '300px',
    });
}





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

document.addEventListener('DOMContentLoaded', function () {
    runTypingEffect();
    scrollReveal();
});
