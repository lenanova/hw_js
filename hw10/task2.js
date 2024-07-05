/*
1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
    Функция должна исполнить колбэк строго через переданное количество миллисекунд
    Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
*/

function delay(callback, timeout) {
    setTimeout(callback, timeout);
}

delay(() => console.log('hello'), 2000)

/*
2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
    1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('After 3 seconds'), 3000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('After 5 seconds'), 5000);
});

Promise.all([promise1, promise2]).then((results) => {
    for (let res of results) {
        console.log(JSON.stringify(res));
    }
});

Promise.allSettled([promise1, promise2]).then((results) => {
    for (let res of results) {
        console.log(res);
    }
})
/*
    2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
        Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
        Вывести в консоль результат обоих промисов по очереди
*/

async function handlePromises(promises) {
    try {
        const [promise1Result, promise2Result] = await Promise.all(promises);
        console.log(promise1Result);
        console.log(promise2Result);
    } catch (error) {
        console.error(`Promise.all returned an error: ${error}`);
    } finally {
        console.log("All promises have been handled via Promise.all");
    }

    try {
        const [promise1Result, promise2Result] = await Promise.allSettled(promises);
        console.log(promise1Result);
        console.log(promise2Result);
    } catch (error) {
        console.error(`Promise.allSettled returned an error: ${error}`);
    } finally {
        console.log("All promises have been handled via Promise.allSettled");
    }
}

handlePromises([promise1, promise2]);

/*
3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
*/

function sumOfNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('Only numbers can be added');
        } else {
            resolve(a + b);
        }
    });
}

sumOfNumbers(10, 5)
    .then(result => {
        console.log(`Sum of two numbers is ${result}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });

sumOfNumbers(10, 'Independence')
    .then(result => {
        console.log(`Sum of two numbers is ${result}`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
/*
4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
    Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. 
    Решить с помощью try/cath и then (обоими способами)
*/

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
    .then(response => response.json())
    .then(resp => {
        const filteredObj = resp.filter(el => el.userId === 1);
        console.log(filteredObj);
    })

async function getTodoByUserId(url, id) {
    try {
        const resp = await fetch(url);
        const obj = await resp.json();
        if (resp.ok) {
            const filteredObj = obj.filter(el => el.userId === id);
            console.log(filteredObj);
        } else {
            throw new Error(`Error status: ${resp.status}`);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

getTodoByUserId(url, 1);