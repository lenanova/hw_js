'use strict';

const minAge = 18;
const maxAge = 60;

let age = 18;

if (age < minAge) {
    console.log(`You don't have access because your age is ${age}. It's less than ${minAge}.`)
} else if (minAge <= age && age < maxAge) {
    console.log('Welcome!')
} else if (age > maxAge) {
    console.log('Keep calm and watch the Culture channel.')
} else {
    console.log('Technical work.')
}