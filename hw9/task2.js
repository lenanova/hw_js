const Animal = require('./task1.js');

class Snake extends Animal {
    #isPoisonous;

    constructor(settings) {
        super(settings.type, settings.color, settings.weight, settings.height, settings.placeOfOrigin);
        this.#isPoisonous = settings.isPoisonous;
    }

    checkPoisonous() {
        return this.#isPoisonous;
    }
}

/*Task 2.
1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal
*/
class Bird extends Animal {
    #isFlying;

    constructor(type, color, weight, height, placeOfOrigin, isFlying) {
        super(type, color, weight, height, placeOfOrigin);
        this.#isFlying = isFlying;
    }

    getInfo() {
        return `${super.getInfo()}, is flying: ${this.#isFlying}.`;
    }

    checkFlying() {
        return this.#isFlying;
    }
}
const bird = new Bird('Owl', 'white', 2, 1, 'Europe', true);
console.log(bird.getInfo());

/*
2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal
*/

class CatLike extends Animal {
    constructor(catSettings) {
        super(catSettings.type, catSettings.color, catSettings.weight, catSettings.height, catSettings.placeOfOrigin);
        this.isSafeToPet = catSettings.isSafeToPet;
    }
    checkIsSafeToPet() {
        return this.isSafeToPet;
    }
}

const cat = new CatLike({ type: 'Cat', color: 'black', weight: 8, height: 0.5, placeOfOrigin: 'Street', isSafeToPet: true });
console.log(cat.checkIsSafeToPet());

/*
3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
    class Worker
      firstName
      lastName
      phone
      getFullName()
*/
class Worker {
    constructor(firstName, lastName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    getFullName() {
        return `Full name: ${this.firstName} ${this.lastName}`;
    }
}

const worker = new Worker('Katy', 'Fisher', '555-551-1213');
console.log(worker.getFullName());

/*
4. Создайте класс Zoo, реализующий следующий интерфейс:
    class Zoo
      address
      title
      ticket price
      workers: []
      animals: [],

5. Добавьте геттеры и сеттеры к полям address, title, ticket price
6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
    На вход метод должен принимать объект класса Worker. 
    Если объект не является инстансом класса Worker - выкинуть ошибку
7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
    На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
    Если объект не является инстансом класса Animal - выкинуть ошибку
    ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"
8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)
*/

class Zoo {
    workers = [];
    animals = [];
    
    constructor(address, title, ticketPrice) {
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
    }

    get address() {
        return this._address;
    }

    set address(newAddress) {
        this._address = newAddress;
    }
    
    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get ticketPrice() {
        return this._ticketPrice;
    }

    set ticketPrice(newTicketPrice) {
        this._ticketPrice = newTicketPrice;
    }

    addWorker(worker) {
        if (!(worker instanceof Worker)) throw new Error('Invalid worker');
        this.workers.push(worker);
    }
    
    addAnimal(animal) {
        if (!(animal instanceof Animal)) throw new Error('Invalid animal');
        if (animal instanceof Snake) throw new Error('There will be no snakes, mister Potter!');
        this.animals.push(animal);
    }

    removeWorker(lastName) {
        const index = this.workers.findIndex(worker => worker.lastName === lastName);
        if (index !== -1) {
            this.workers.splice(index, 1);
        } else {
            throw new Error('Worker not found');
        }
    }

    removeAnimal(type) {
        const index = this.animals.findIndex(animal => animal.type === type);
        if (index !== -1) {
            this.animals.splice(index, 1);
        } else {
            throw new Error('Animal not found');
        }
    }
}

const zoo = new Zoo('120 U Trojskeho Zamku', 'Prague Zoological Garden', 50);
console.log(`${zoo.title} is located at ${zoo.address}.`);

zoo.addWorker(new Worker('David', 'Walter', '555-551-1617'));
zoo.addWorker(new Worker('Matthew', 'White', '555-551-1415'));
zoo.addWorker(new Worker('Anna', 'Brown', '555-551-1819'))
console.log(zoo.workers);

zoo.addAnimal(new Bird('Owl', 'white', 2, 1, 'Europe', true));
zoo.addAnimal(new Bird('Chicken', 'black', 0.5, 0.5, 'Asia', false));
zoo.addAnimal(new Animal('Elephant', 'blue', 1500, 3, 'Africa'));
zoo.addAnimal(new CatLike({ type: 'Cat', color: 'black', weight: 8, height: 0.5, placeOfOrigin: 'Street', isSafeToPet: true }));
console.log(zoo.animals);

zoo.removeWorker('Brown');
console.log(zoo.workers);

zoo.removeAnimal('Elephant');
console.log(zoo.animals);

// check the Harry Potter error
/*
zoo.addAnimal(new Snake({ type: 'Snake', color: 'red', weight: 10, height: 1, placeOfOrigin: 'Australia', isPoisonous: true }));
*/