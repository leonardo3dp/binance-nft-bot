// [Settings] //
const shouldClickMax = true; // Should we buy max amount of NFT clicking to "Max" button

// [Client Scripts] //

let isMaxClicked = false;
let isBuyClicked = false;
let isSubmitClicked = false;

// Defines document root, body as default
const appRoot = () => {
    return document.getElementsByTagName('body')[0];
}

// Defines function for checking Max Button
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

// Defines common function for checking button with custom inner text value
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

// Defines Buy Button
const checkBuyButton = (label) => {
    const searchLabel = label || `Купить`;

    return checkButton(searchLabel);
}

// Defines Submit Button
const checkSubmitButton = (label) => {
    const searchLabel = label || `Подтвердить`;

    return checkButton(searchLabel);
}

// Defines main function for monitoring presence of buttons on the page
const runWatchDog = (timeout = 0) => {
    if(shouldClickMax) {
        if (checkMaxButton() && !isMaxClicked) {
            console.log('Clicked "Max"');
            checkMaxButton().focus();
            setTimeout(checkMaxButton().click(), 2);
            isMaxClicked = true;
        }
    } else {
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