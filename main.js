const input = require('sync-input');

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
};

console.log("Welcome to Currency Converter!");

for (const currency in currencies) {
    console.log(`1 USD equals ${currencies[currency]} ${currency}`);
}

function getInputFromUser(inputText) {
    while (true) {
        switch (inputText) {

            case "From:":
                console.log('What do you want to convert?');
                const fromCurrency = input(inputText).toUpperCase();
                if (!currencies.hasOwnProperty(fromCurrency)) {
                    console.log("Unknown currency\n");
                    break;
                }
                return fromCurrency;
            case "To:":
                const toCurrency = input(inputText).toUpperCase();
                if (!currencies.hasOwnProperty(toCurrency)) {
                    console.log("Unknown currency\n");
                    break;
                }
                return toCurrency;
            case "Amount:":
                const amount = Number(input(inputText));
                if (amount <= 0) {
                    console.log("The amount cannot be less than 1");
                    break;
                } else if (isNaN(amount)) {
                    console.log("The amount has to be a number");
                    break;
                }
                return amount;
            default:
                break;
        }
    }

}

function convertCurrency() {


    const sourceCurrency = getInputFromUser("From:");
    const destinationCurrency = getInputFromUser("To:");
    const amount = Number(getInputFromUser("Amount:"));


    const result = sourceCurrency === destinationCurrency ? amount : (amount / currencies[sourceCurrency]) * currencies[destinationCurrency];
    console.log(`Result: ${amount} ${sourceCurrency} equals ${result.toFixed(4)} ${destinationCurrency}`);
}

do {
    console.log("What do you want to do?\n1-Convert currencies 2-Exit program\n");
    const convertOrExit = parseInt(input()) || 0;

    switch (convertOrExit) {
        case 1:
            convertCurrency();
            break;
        case 2:
            console.log("Have a nice day!");
            return;
        default:
            console.log("Unknown input");
            break;
    }
} while (true);
