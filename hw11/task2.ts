import { ItEmployee, IAddress, employee_1  } from './task1';

/*
1. Создайте интерфейс IEmployee с полями name, surname, salary, address 
(типы для этих полей такие же как в ItEmployee из таск 1)
  Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee 
  (формат текста придумать самим)
  Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. 
  Используйте его в функции getEmployeeInfo. 
  Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
  Функция должна принимать union type между IEmployee и ItEmployee, 
  и через тайпгвард определять что за объект и как работать с ним
*/

interface IEmployee {
    name: string;
    surname: string;
    salary: number;
    address: IAddress;
}

const employee_2: IEmployee = {
    name: "Teddy",
    surname: "Smith",
    salary: 50000,
    address: {
        country: "USA",
        city: "San Francisco",
        street: "El Camino Real",
        house: 100,
        flat: 19,
    }
}

function isItEmployee (employee: IEmployee | ItEmployee): employee is ItEmployee {
    return "occupation" in employee;
}
function getEmployeeInfo (employee: IEmployee | ItEmployee){
    if (isItEmployee(employee)) {
        // console.log(`IT Employee: ${employee.name} ${employee.surname}, address: ${JSON.stringify(employee.address)}`)
        console.log(Object.entries(employee));
    } else {
        console.log(`${employee.name} ${employee.surname} is not an IT Employee :( His salary is ${employee.salary}, address: ${JSON.stringify(employee.address)})`)
    }
}

getEmployeeInfo(employee_1);
getEmployeeInfo(employee_2);
console.log('========');

/*
2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
  Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, 
  а значение - string, number, boolean. 
  Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте 
  или в сумме у всех объектов в массиве. 
*/

const obj = { 
    value_1: "text", 
    value_2: 21, 
    value_3: true,
    value_4: "song", 
    value_5: false,
    value_6: 12,
};

const arrayOfObj = [
    {
        value_1: "text", 
        value_2: 21, 
        value_3: true,
        value_4: "song", 
        value_5: false,
        value_6: 12,
    },
    {
        value_1: "word", 
        value_2: 15, 
        value_3: true,
        value_4: "sentence", 
        value_5: false,
        value_6: "51",
    }
];

type TObject = { [key: string]: number | string | boolean};

type TCount = {
    string: number;
    number: number;
    boolean: number;
};  

function countValueTypes(obj: TObject | TObject[]): TCount {
    const result: TCount = { string: 0, number: 0, boolean: 0 };

    const countValues = (obj: TObject) => {
        for (const key in obj) {
            const value = obj[key];
            if (typeof value === "string") {
                result.string += 1;
            } else if (typeof value === "number") {
                result.number += 1;
            } else if (typeof value === "boolean") {
                result.boolean += 1;
            }
        }
    }

    if (Array.isArray(obj)) {
        obj.forEach(countValues);
    } else {
        countValues(obj);
    }
    
    return result;
}

console.log(countValueTypes(obj)); 
console.log(countValueTypes(arrayOfObj)); 
console.log('========');

/*
3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
    который будет использоваться для проверки каждого числа на соответствие требованиям. 
    Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
    Пример функции:
    const numbers = [1, -5, 2, 3, 4, 133];
    filter(numbers, (n) => n > 3); // [4, 133]
    filter(numbers, (n) => n % 2 == 0); // [2, 4]
    Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число 
    и возвращающая логическое значение.
*/

type TcallbackFunction = (n: number) => boolean;
type Tnumbers = number[];

function filter(numbers: Tnumbers, callbackFunction: TcallbackFunction): Tnumbers {
    const result: Tnumbers = [];
    for (const num of numbers) {
        if (callbackFunction(num)) {
            result.push(num);
        }
    }
    return result;
}

const numbers = [1, -5, 2, 3, 4, 133];
console.log(filter(numbers, (n) => n > 3));
console.log(filter(numbers, (n) => n % 2 === 0));

