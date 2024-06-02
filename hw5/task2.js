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