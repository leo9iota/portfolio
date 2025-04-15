const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const word = 'leo9iota';

let intervalId = null;

document.querySelector('h1').onmouseover = (event) => {
    let iterationCount = 0;

    clearInterval(intervalId);

    intervalId = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split('')
            .map((element, index) => {
                // console.log(`${element}:${index}`);

                if (index < iterationCount) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join('');

        if (iterationCount >= word.length) {
            // Stop interval
            clearInterval(intervalId);
        }

        iterationCount += 1 / 3;

        console.log(iterationCount);
    }, 75);
};
