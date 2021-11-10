function fullName(firstName = "", lastName = "") {
    return firstName + " " + lastName;
}

let firstName = "Arya";
let lastName = "Snow";

let result = fullName(firstName, lastName);

let expected = "AryaSnow";

if (result !== expected) {
    throw new Error(`${result} is not same to ${expected}`);
}


firstName = "John";
lastName = "White";


result = fullName(firstName, lastName);

expected = "John White";

if (result !== expected) {
    throw new Error(`${result} is not same to ${expected}`);
}

// No the second output is not visible.



function totalAmount(amount = 0, taxRate = 0) {
    return amount + (amount * taxRate);
}

let amount = 35000;
let taxRate = 1200;

let result = totalAmount(amount, taxRate);

let expected = 4203500;

if (result !== expected) {
    throw new Error(`${result} is not same to ${expected}`);
}


amount = 360;
taxRate = 25;


result = totalAmount(amount, taxRate);

expected = 9360;

if (result !== expected) {
    throw new Error(`${result} is not same to ${expected}`);
}


// No the second output is not visible.