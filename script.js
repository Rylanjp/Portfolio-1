document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
});

// Konami Code Easter Egg
let konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];
let konamiIndex = 0;

document.addEventListener('keydown', function (e) {
    let pressedKey = e.code;

    console.log(`Key pressed: ${e.key} (Code: ${pressedKey})`);

    if (pressedKey === konamiCode[konamiIndex]) {
        konamiIndex++;
        console.log(`Correct key: ${pressedKey}`);
        if (konamiIndex === konamiCode.length) {
            console.log("Konami code entered correctly!");
            toggleRetroMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
        console.log("Incorrect key pressed, resetting...");
    }
});

function toggleRetroMode() {
    const retroModeActive = document.body.classList.contains('retro-mode');

    if (retroModeActive) {
        console.log("Deactivating retro mode...");

        document.body.classList.remove('retro-mode');
        document.body.style.backgroundColor = "";
        document.body.style.color = "";

        document.querySelector('header').style.backgroundColor = "";
        document.querySelector('footer').style.backgroundColor = "";
        document.querySelector('footer').style.color = "";

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.style.color = "";
            link.style.fontFamily = "";
        });

        document.body.style.fontFamily = "";
    } else {
        console.log("Activating retro mode...");

        document.body.classList.add('retro-mode');
        
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#00FF00";

        document.querySelector('header').style.backgroundColor = "#111";
        document.querySelector('footer').style.backgroundColor = "#111";
        document.querySelector('footer').style.color = "#00FF00";

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.style.color = "#00FF00";
            link.style.fontFamily = "'Press Start 2P', cursive";
        });

        document.body.style.fontFamily = "'Press Start 2P', cursive";
    }
}

