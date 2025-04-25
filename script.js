// /**
//  * @class MatrixDigitalRain
//  * Digital rain background from The Matrix 
//  */
// class MatrixDigitalRain {
//     #canvas;
//     #ctx;
//     #characters;
//     #fontSize = 16;
//     #columns;
//     #drops;
//     // Add private fields for bound methods
//     #boundResize;
//     #boundAnimate;
    
//     /**
//      * Matrix digital rain effect constructor
//      * @param {string} selector - CSS selector for the container element
//      */
//     constructor(selector = '.matrix-code') {
//         // Initialize canvas
//         this.#canvas = document.createElement('canvas');
//         this.#ctx = this.#canvas.getContext('2d');
        
//         // Get container and set canvas dimensions
//         const container = document.querySelector(selector);
//         container.appendChild(this.#canvas);
        
//         // Set up characters (mix of katakana and latin)
//         this.#characters = [
//             ...'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
//             ...'0123456789'
//         ];
        
//         // Bind methods to private fields
//         this.#boundResize = this.#resize.bind(this);
//         this.#boundAnimate = this.#animate.bind(this);
        
//         // Set up event listeners
//         window.addEventListener('resize', this.#boundResize);
        
//         // Initial setup
//         this.#resize();
//         this.#initDrops();
//         this.#animate();
//     }
    
//     /**
//      * Handles canvas resize
//      * @private
//      */
//     #resize() {
//         this.#canvas.width = window.innerWidth;
//         this.#canvas.height = window.innerHeight;
//         this.#columns = Math.floor(this.#canvas.width / this.#fontSize);
//         this.#initDrops();
//     }
    
//     /**
//      * Initializes rain drops
//      * @private
//      */
//     #initDrops() {
//         this.#drops = Array(this.#columns).fill(1).map(() => ({
//             y: Math.random() * -100,
//             speed: 1 + Math.random() * 2,
//             length: 10 + Math.floor(Math.random() * 20)
//         }));
//     }
    
//     /**
//      * Renders a single frame
//      * @private
//      */
//     #draw() {
//         // Create fade effect
//         this.#ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
//         this.#ctx.fillRect(0, 0, this.#canvas.width, this.#canvas.height);
        
//         // Set text properties
//         this.#ctx.fillStyle = '#0F0';
//         this.#ctx.font = `${this.#fontSize}px 'Share Tech Mono'`;
        
//         // Draw each column
//         this.#drops.forEach((drop, i) => {
//             // Get random character
//             const char = this.#characters[Math.floor(Math.random() * this.#characters.length)];
//             const x = i * this.#fontSize;
            
//             // Draw leading character (brighter)
//             this.#ctx.fillStyle = '#FFF';
//             this.#ctx.fillText(char, x, drop.y);
            
//             // Draw trailing characters (dimmer)
//             this.#ctx.fillStyle = '#0F0';
//             for (let j = 1; j < drop.length; j++) {
//                 const trailChar = this.#characters[Math.floor(Math.random() * this.#characters.length)];
//                 this.#ctx.fillText(trailChar, x, drop.y - j * this.#fontSize);
//             }
            
//             // Update drop position
//             drop.y += drop.speed;
            
//             // Reset drop when it goes off screen
//             if (drop.y > this.#canvas.height + drop.length * this.#fontSize) {
//                 drop.y = -drop.length * this.#fontSize;
//             }
//         });
//     }
    
//     /**
//      * Animation loop
//      * @private
//      */
//     #animate() {
//         this.#draw();
//         requestAnimationFrame(this.#boundAnimate);
//     }
    
//     /**
//      * Cleans up event listeners
//      */
//     destroy() {
//         window.removeEventListener('resize', this.#boundResize);
//         this.#canvas.remove();
//     }
// }

// /**
//  * @class Terminal
//  * Interactive terminal inspired by Alacritty
//  */
// class Terminal {}

// // Initialize the Matrix effect when the page loads
// document.addEventListener('DOMContentLoaded', () => {
//     new MatrixDigitalRain();
// });
