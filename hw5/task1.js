'use strict';

// 0..10

let i = 10;

while (i >= 0) {
    console.log(i);
    i--;
}

// :)
const emoji = ':)';
let row = emoji;

for (let i = 1; i < 6; i++) {
    console.log(row);
    row += emoji;
}

// :) while
let counter = 1;

while (counter < 6) {
    console.log(emoji.repeat(counter));
    counter++;
}