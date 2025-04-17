class MatrixRain {}

class Terminal {}

const matrixChars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,./<>?';
const username = 'leo9iota';

let intervalId = null;
let isHovering = false;
let headingElement = document.querySelector('h1');

// Wrap each character in a span for individual animations
function wrapCharsInSpans(element) {
    const text = element.textContent;
    element.innerHTML = text
        .split('')
        .map((char) => `<span class="matrix-char">${char}</span>`)
        .join('');
}

// Initialize the page
function init() {
    wrapCharsInSpans(headingElement);
    startIdleAnimation();
}

// Random character from matrix characters
function getRandomChar() {
    return matrixChars[Math.floor(Math.random() * matrixChars.length)];
}

// Idle animation (subtle character changes when not hovering)
function startIdleAnimation() {
    const spans = document.querySelectorAll('.matrix-char');

    // Occasionally change random characters
    setInterval(() => {
        if (!isHovering) {
            const randomIndex = Math.floor(Math.random() * spans.length);
            const span = spans[randomIndex];

            // Store original character if not already stored
            if (!span.dataset.original) {
                span.dataset.original = span.textContent;
            }

            // Glitch effect
            span.textContent = getRandomChar();
            span.classList.add('glitch');

            // Restore after a short delay
            setTimeout(() => {
                span.textContent = span.dataset.original;
                span.classList.remove('glitch');
            }, 100 + Math.random() * 400);
        }
    }, 200);
}

// Matrix effect on hover
headingElement.onmouseover = () => {
    isHovering = true;
    let iterationCount = 0;
    const spans = document.querySelectorAll('.matrix-char');

    clearInterval(intervalId);

    // Reset all characters to random
    spans.forEach((span) => {
        span.textContent = getRandomChar();
        span.classList.add('glitch');
    });

    intervalId = setInterval(() => {
        spans.forEach((span, index) => {
            // Gradually reveal the actual characters
            if (index < iterationCount) {
                span.textContent = username[index];
                span.classList.remove('glitch');
            } else {
                // Keep randomizing the other characters
                if (Math.random() > 0.8) {
                    span.textContent = getRandomChar();
                }
            }
        });

        if (iterationCount >= username.length) {
            clearInterval(intervalId);
        }

        iterationCount += 1 / 3;
    }, 50);
};

// Reset when not hovering
headingElement.onmouseout = () => {
    isHovering = false;
    clearInterval(intervalId);

    // Gradually return to random characters
    const spans = document.querySelectorAll('.matrix-char');
    let count = username.length;

    intervalId = setInterval(() => {
        if (count < 0) {
            clearInterval(intervalId);
            return;
        }

        // Randomize characters from right to left
        for (let i = count; i < spans.length; i++) {
            spans[i].textContent = getRandomChar();
            spans[i].classList.add('glitch');
        }

        count--;
    }, 50);
};

// Initialize when the page loads
window.addEventListener('load', init);
