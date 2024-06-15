/*
1. У вас есть массив названий пицц вашего конкурента. 
Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
и возвращать только те, которых нет у конкурента (тоже массив). 
Если все ваши пиццы есть у конкурента - вернуть null
Пиццы конкурента:
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
*/

// const competitorPizzas = ['Pepperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawaii']

// function comparePizzas(myPizzas) {
//     const competitorPizzasLowerCase = competitorPizzas.map(pizza => pizza.toLowerCase());
//     const result = myPizzas.filter(pizza => competitorPizzasLowerCase.includes(pizza.toLowerCase()));

//     return result.length === 0 ? null : result;
// }

// console.log(comparePizzas(['Quatro Queso', 'Tacos Pizza', 'Hawaii', 'Pepperoni']));

const competitorPizzas = ['Pepperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawaii'];

function comparePizzas(myPizzas) {
  const competitorPizzasLowerCase = competitorPizzas.map(pizza => pizza.toLowerCase());
  const result = [];
  for (let i = 0; i < myPizzas.length; i++) {
    if (!competitorPizzasLowerCase.includes(myPizzas[i].toLowerCase())) {
      result.push(myPizzas[i]);
    }
  }
  if (result.length === 0) {
    return null;
  }
  return result;
}

console.log(comparePizzas(['Quatro Queso', 'Tacos Pizza', 'Hawaii', 'Pepperoni']));
console.log(comparePizzas(['Hawaii', 'Pepperoni']));


/*  
2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) 
в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
Если таких слов несколько - выводит их все.
*/

function findWord (sentence) {
  const sentenceToArray = sentence.split(' ');
  let maxWordLength = 0;
  const resultArray = [];


  sentenceToArray.forEach(element => {
    if (element.length > maxWordLength) {
      maxWordLength = element.length;
    }
  })

  sentenceToArray.forEach(longWord => {
    if (longWord.length === maxWordLength) {
      resultArray.push(longWord);
      }
  })
  return resultArray;
}

console.log(findWord('The quick brown fox jumps over the lazy dog'));
console.log(findWord('JavaScrpt is a curse and a blessing'));

/*
3. Напишите функцию, которая принимает на вход массив чисел, 
убирает из него дубликаты и возвращает массив с только уникальными значениями.
*/

function returnUniqueNumbers(arrayOfNumbers) {
  const uniqueNumbers = [];
  arrayOfNumbers.forEach(num => {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  })
  return uniqueNumbers;
}

console.log(returnUniqueNumbers([1, 2, 15, 47, 15, 2, 36]))

/*
4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function verifyPalindrome(word) {
  const wordToLowerCase = word.toLowerCase();
  const reversedWord = wordToLowerCase.split('').reverse().join('');
  return (reversedWord === wordToLowerCase)
}

console.log(verifyPalindrome('Kayak'));
console.log(verifyPalindrome('Kayaking'));