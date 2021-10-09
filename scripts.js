// [Settings]
const shouldClickMax = true; // Should we buy max amount of NFT clicking to "Max" button

// [Client Scripts]

let isMaxClicked = false;
let isBuyClicked = false;
let isSubmitClicked = false;

const appRoot = () => {
    return document.getElementsByTagName('body')[0];
}

const checkMaxButton = () => {
    const searchLabel = `Макс`;

    const divs = appRoot().getElementsByTagName('div');

    for (let i = 0; i < divs.length; i++) {
        if(divs[i].textContent.length < 20 && divs[i].textContent.includes(searchLabel)) {
            return divs[i].lastElementChild.lastElementChild;
        }
    }

    return false
}

const checkButton = (label) => {
    const searchLabel = label;

    const buttons = appRoot().getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        if(buttons[i].textContent.toLowerCase().includes(searchLabel.toLowerCase())) {
            return buttons[i]
        }
    }

    return false
}

const checkBuyButton = () => {
    const searchLabel = `Купить`;

    return checkButton(searchLabel);
}

const checkSubmitButton = () => {
    const searchLabel = `Подтвердить`;

    return checkButton(searchLabel);
}

const runWatchDog = (timeout = 0) => {
    if (checkMaxButton() && !isMaxClicked) {
        console.log('Clicked "Max"');
        checkMaxButton().focus();
        setTimeout(checkMaxButton().click(), 2);
        isMaxClicked = true;
    }

    if(checkBuyButton() && isMaxClicked && !isBuyClicked) {
        console.log('Clicked "Buy"');
        checkBuyButton().focus();
        setTimeout(checkBuyButton().click(), 6);
        isBuyClicked = true
    }

    if(checkSubmitButton() && isMaxClicked && isBuyClicked && !isSubmitClicked) {
        console.log('Clicked "Submit"');
        checkSubmitButton().focus();
        setTimeout(checkSubmitButton().click(), 8);
        isSubmitClicked = true
    }

    if (!isBuyClicked || !isSubmitClicked) {
        setTimeout(runWatchDog, timeout);
    }
}

// Dev Scripts
function createButtonSubmit() {
    const button = document.createElement('button');
    button.innerText = `Подтвердить`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

function createButtonMax() {
    const button = document.createElement('div');
    button.innerText = `Макс`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

function createButtonBuy() {
    const button = document.createElement('button');
    button.innerText = `Купить`
    button.addEventListener('click', () => {
        console.warn(`Clicked ${button.innerText} `)
    })

    return button
}

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