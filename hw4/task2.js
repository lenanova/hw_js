'use strict';

const minAge = 18;
const maxAge = 60;

let age = 'aaa';

// 1-2
if (typeof age !=='number') {
    console.log('Not a numberrrrrr!')
} else {
    switch(true) {
        case age < minAge: {
            console.log(`You don't have access because your age is ${age}. It's less than ${minAge}.`);
            break;
        }
    
        case minAge <= age && age < maxAge: {
            console.log('Welcome!');
            break;
        }
    
        case age === maxAge: {
            console.log('Technical work.');
            break;
        }
    
        case age > maxAge: {
            console.log('Keep calm and watch the Culture channel.');
            break;
        }   
    }
}

// 3

const minimumAge = 18;
const maximumAge = 60;

let ageValue = '18 years';

// string input containing only numbers is accepted. Ex: "88" - accept, "88 years" or "" - throw an error.
if (isNaN(ageValue) || !(ageValue)) {
    console.log('Not a numberrrrrr!')
} else {
    switch(true) {
        case ageValue < minimumAge: {
            console.log(`You don't have access because your age is ${ageValue}. It's less than ${minimumAge}.`);
            break;
        }
    
        case minimumAge <= ageValue && ageValue < maximumAge: {
            console.log('Welcome!');
            break;
        }
    
        case ageValue === maximumAge: {
            console.log('Technical work.');
            break;
        }
    
        case ageValue > maximumAge: {
            console.log('Keep calm and watch the Culture channel.');
            break;
        }   
    }
}