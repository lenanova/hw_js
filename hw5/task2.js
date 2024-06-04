'use strict';

// bytes => KB MB GB TB

let bytes = 102410241024;
const divider = 1024;

if (bytes < divider) {
    console.log(`${bytes} bytes.`);
} else {
    let result = bytes;
    let i = 0;

    while (result >= divider) {
        result = result/divider;
        i++;
    }

    let unit;
    switch (i) {
        case 1:
            unit = 'KB';
            break;
        case 2:
            unit = 'MB';
            break;
        case 3:
            unit = 'GB';
            break;
        case 4:
            unit = 'TB';
            break;
    }

    if (i <= 4) {
        console.log(`${bytes} bytes equals to ${result.toFixed(1)} ${unit}.`);
    } else {
        console.log(`The number is too large! I'm running out of memory!`)
    }
}

// triangle

let height = 5;

for (let i = 0; i <= height; i++) {
    let star = '*'.repeat(2 * i  + 1);
    let space = ' '.repeat(height - i);
    
    console.log(space + star);
}

// diamond

let halfHeight = 5;
for (let i = 0; i <= halfHeight; i++) {
    let space = ' '.repeat(halfHeight - i);
    let star = '*'.repeat(2 * i  + 1);
    console.log(space + star);
}
for (let i = halfHeight-1; i >= 0; i--) {
    let space = ' '.repeat(halfHeight - i);
    let star = '*'.repeat(2 * i  + 1);
    console.log(space + star);
}

// 1...100/15/5/3

for (let i = 1; i <=100; i++) {
    /* хотела тут красиво написать 
    if (!(i % 15))
    но так нечитабельно */
    if  (i % 15 === 0) {
        console.log(`Number ${i} is divisible by 3 and 5`);
    } else if (i % 3 === 0) {
        console.log(`Number ${i} is divisible by 3`);
    } else if (i % 5 === 0) {
        console.log(`Number ${i} is divisible by 5`);
    } else {
        console.log(i);
    }
}

// camelCase

let str = `Let's learn arrays`;
if (str.includes('\'')) {
    str = str.replaceAll('\'', '');
}

const strToArrayLowerCase = str.toLowerCase().split(' ');

for (let i = 1; i < strToArrayLowerCase.length; i++) {
    strToArrayLowerCase[i] = strToArrayLowerCase[i][0].toUpperCase() + strToArrayLowerCase[i].slice(1);
}

const strCamelCased = strToArrayLowerCase.join('');
console.log(strCamelCased);
