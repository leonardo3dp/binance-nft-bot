// [Dev Scripts for testing & development] //

// Defines document root, body as default
const appRoot = () => {
    return document.getElementsByTagName('body')[0];
}

// Creates a new button Submit
function createButtonSubmit(label) {
    const button = document.createElement('button');
    button.innerText = label || `Подтвердить`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

// Creates a new button Max
function createButtonMax(label) {
    const button = document.createElement('div');
    button.innerText = label || `Макс`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

// Creates a new button buy
function createButtonBuy(label) {
    const button = document.createElement('button');
    button.innerText = label || `Купить`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

// Function to append buttons into document root
function appendButtons() {
    const appendButton = (button) => {
        appRoot().append(button);

        console.log(`Done for "${button.innerText.toString()}"`);
    }

    setTimeout(() => {appendButton(createButtonMax())}, 10);
    setTimeout(() => {appendButton(createButtonBuy())}, 60);
    setTimeout(() => {appendButton(createButtonSubmit())}, 95);

    return 'Working...'
}