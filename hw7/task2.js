/*
1. На вход функции подаётся предложение, например “I am the best AQA ever!” 
Преобразуйте строку таким образом, чтобы вместо каждой буквы была цифра, 
показывающая сколько раз эта буква встречается в предложении. 
Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

function countLetters(sentence){
    const sentenceToArray = sentence.toLowerCase().split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = []; 
    
    for (const letter of sentenceToArray) {
        if (alphabet.includes(letter)){
            const count = sentenceToArray.filter((el) => el === letter).length;
            result.push(count)
        } else {
            result.push(letter)
        }
    }
    return result.join('');
}

console.log(countLetters('I am the best AQA ever!'));

// Same task solved via .map()

function countLettersAgain(sentence){
    const sentenceToArray = sentence.toLowerCase().split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = sentenceToArray.map((letter) => {
        if (alphabet.includes(letter)){
            const count = sentenceToArray.filter((el) => el === letter).length;
            return count;
        } else {
            return letter;
        }
    })
    return result.join('');
}

console.log(countLettersAgain('I am the best AQA ever!'));

/*
2. У вас есть массив с ценами товаров в чеке. 
В консоль нужно вывести сумму всех цен и среднюю цену товара.
Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
const sumPrices = prices.reduce((total, price) => total + price, 0);
const averagePrice = (sumPrices/prices.length).toFixed(2);
const message = `Total is $${sumPrices}, the average price of the item is $${averagePrice}`

console.log(message);

/*
3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив
по следующему критерию: количество гласных букв.
Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/

const arrayOfWords = ['Yeli', 'Myaso', 'Muzhiki', 'Pivom', 'Zapivali'];

function sortArrayOfWords(arrayOfWords) {
    const newArrayOfWords = [...arrayOfWords];
    newArrayOfWords.sort((a, b) => {
    const countA = countVowels(a);
    const countB = countVowels(b);
    return countA - countB;
    });
    return newArrayOfWords;
}

function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (const letter of word) {
        if (vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(sortArrayOfWords(arrayOfWords));

/*
4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], 
количество элементов и последовательность может быть разной.
Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

Усложнение: в массиве могут быть вложены еще массивы на разной глубине. 
(ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
Пример:
const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
*/

const arr1 = ['(', ')', '(', ')', ')'];
const arr2 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];

function checkParentheses(arr) {
    const flatArray = arr.flat(Infinity);
    const openingPar = flatArray.filter((el) => el === '(');
    const closingPar = flatArray.filter((el) => el === ')');
    return openingPar.length === closingPar.length;
}

console.log(checkParentheses(arr1));
console.log(checkParentheses(arr2));