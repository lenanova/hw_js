/*
1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
    Функция должна исполнить колбэк строго через переданное количество миллисекунд
    Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
    

2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
    1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
    2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке. 
        Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
        Вывести в консоль результат обоих промисов по очереди

3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
    Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)
*/

