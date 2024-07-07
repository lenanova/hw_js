/*
1. Создайте interface ItEmployee
2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number 
и доступно только для чтения
5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: 
junior, middle, senior, lead
6. В интерфейсе ItEmployee сделайте поле grade типа Grade
7. Создайте enum OCCUPATION, который будет представлять професси в айти вида 
DEVELOPER = "Developer" и так далее
8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)
12. Создайте объект с типом ItEmployee
*/

interface ItEmployee {
  name: string;
  surname: string;
  readonly salary: number;
  grade: Grade;
  occupation: OCCUPATION;
  address?: IAddress;
  projectNames: string[];
}

type Grade = "junior" | "middle" | "senior" | "lead";

enum OCCUPATION {
    DEVELOPER = "Developer",
    QA = "QA Engineer",
    DEVOPS = "Devopsina",
    DATA = "Data Engineer",
}

interface IAddress {
    country: string;
    city: string;
    street: string;
    house: number;
    flat: number;
}

const employee_1: ItEmployee = {
    name: "Katy",
    surname: "Brown",
    salary: 100000,
    grade: "middle",
    occupation: OCCUPATION.QA,
    address: {
        country: "USA",
        city: "New York",
        street: "Avenue A",
        house: 10015,
        flat: 24,
    },
    projectNames: ["Project Alfa", "Project Beta", "Project Gamma"],
}

console.log(employee_1);