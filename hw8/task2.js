/*
Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!
*/

const enterprises = [
    {
    id: 1,
    name: "Предприятие 1",
    departments: [
        {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
        },
        {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
        },
        {
        id: 4,
        name: "Администрация",
        employees_count: 15,
        },
    ]
    },
    {
    id: 5,
    name: "Предприятие 2",
    departments: [
        {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
        },
        {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
        },
        {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
        },
    ]
    },
    {
    id: 9,
    name: "Предприятие 3",
    departments: [
        {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
        },
    ]
    }
]

/*Задания:
1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
Для предприятия посчитать сумму всех сотрудников во всех отделах.

**Пример:**

Предприятие 1 (45 сотрудников)
- Отдел тестирования (10 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Администрация (15 человек)
Предприятие 2 (75 сотрудников)
- Отдел разработки (50 сотрудников)
- Отдел маркетинга (20 сотрудников)
- Отдел охраны труда (5 сотрудников)
Предприятие 3 (нет сотрудников)
- Отдел аналитики (нет сотрудников)
*/

function printCompanyInfo(arr){
    arr.forEach((enterprise) => {
        const totalEmployeeCount = enterprise.departments.reduce((sum, department) => sum + department.employees_count, 0);
        if (totalEmployeeCount > 0) {
            console.log(`${enterprise.name} (${totalEmployeeCount} сотрудников)`);
        } else {
            console.log(`${enterprise.name} (нет сотрудников)`);
        }
        enterprise.departments.forEach((department) => {
        if (department.employees_count > 0) {
            console.log(`- ${department.name} (${department.employees_count} сотрудников)`)
        } else {
            console.log(`- ${department.name} (нет сотрудников)`);
        };
        })
    })
}

printCompanyInfo(enterprises);
console.log('=======')

/*
2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела 
и возвращать название предприятия, к которому относится).

Пример:
getEnterpriseName(4) // Предприятие 1
getEnterpriseName("Отдел маркетинга") // Предприятие 2

function getCompanyName(idOrName) {
    const company = 
}
*/

function getEnterpriseName(nameOrId) {
    const company = getCompanyByNameOrId(nameOrId);
    return company.name;
}

function getCompanyByNameOrId(nameOrId){
    const foundCompany = enterprises.find(company => {
        const foundDept = company.departments.find((dept) => dept.name === nameOrId || dept.id === nameOrId);
        return foundDept;
    })
    if (!foundCompany) throw new Error("No such enterprise");
    return foundCompany;
}

console.log(getEnterpriseName(7));
console.log('=======')
/*
3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

Пример:
addEnterprise("Название нового предприятия")
*/

function addEnterprise(name) {
    const newEnterprise = {
        id: getNewId(),
        name,
        departments: []
    }
    enterprises.push(newEnterprise)
}

function getNewId(id) {
    id = 0;
    enterprises.forEach((company) => {
        if (company.id > id) id = company.id;
        company.departments.forEach((dept) => {
            if (dept.id > id) id = dept.id;
        })
    })
    return id + 1
}

addEnterprise('Рога и Копыта - 4');
console.log(enterprises);
console.log('=======')
/*
4. Написать функцию, которая будет добавлять отдел в предприятие. 
В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

Пример:
addDepartment(1, "Название нового отдела")
*/

function addDepartment(companyId, deptName) {
    const company = getCompanyById(companyId);
    const newDept = createNewDept(deptName);
    company.departments.push(newDept);
}

function createNewDept(deptName) {
    const newDept = {
        id: getNewId(),
        name: deptName,
        employees_count: 0
    }
    return newDept;
}

function getCompanyById(companyId) {
    const foundCompany = enterprises.find((company) => company.id === companyId);
    if (!foundCompany) throw new Error("No such company");
    return foundCompany;
}

addDepartment(9, 'QA');
console.log(enterprises[2]);
console.log('=======')
/*
5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
Пример:
editEnterprise(1, "Новое название предприятия")
*/

function editEnterprise(companyId, newName) {
    const company = getCompanyById(companyId);
    if (!company) {
        throw new Error("No such enterprise");
    }
    company.name = newName;
}
editEnterprise(1, 'Новое название предприятия 1');
console.log(enterprises[0]);

console.log('=======')

/*
6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

Пример:
editDepartment(7, "Новое название отдела")
*/
function editDepartment(deptId, newDeptName) {
    const dept = getDepartmentById(deptId);
    if (!dept) {
        throw new Error("No such department");
    }
    dept.name = newDeptName;
}

function getDepartmentById(deptId) {
    for (const company of enterprises) {
        const foundDept = company.departments.find((dept) => dept?.id === deptId);
        if (foundDept) {
            return foundDept;
        }
    }
    return null;
};

editDepartment(6, "Новое название отдела");
console.log(enterprises[1]);

console.log('=======')
/*
7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

Пример:
deleteEnterprise(1)
*/

function deleteEnterprise(companyId) {
    const companyToDelete = getCompanyById(companyId);
    enterprises.splice(companyToDelete, 1);
}

deleteEnterprise(1);
console.log(enterprises);
console.log('=======')
/*
8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

Пример:
deleteDepartment(3)
*/

function deleteDepartment(deptId) {
    const deptInQuestion = getDepartmentById(deptId);
    if (!deptInQuestion) {
        throw new Error("No such department");
    }

    if (deptInQuestion.employees_count > 0) {
        throw new Error("Нельзя удалить отдел с сотрудниками!");
    }

    const company = getCompanyByDept(deptInQuestion);
    const deptToDeleteIndex = company.departments.findIndex(dept => dept.id === deptId);
    if (deptToDeleteIndex !== -1) {
        company.departments.splice(deptToDeleteIndex, 1);
    }
}

function getCompanyByDept(dept) {
    return enterprises.find(company => company.departments.includes(dept));
}

deleteDepartment(10);
console.log(enterprises);
console.log('=======')

/*
9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

Пример:
moveEmployees(2, 3)
*/

function moveEmployees(iDdept1, iDdept2) {
    const dept1 = getDepartmentById(iDdept1);
    const dept2 = getDepartmentById(iDdept2);
    console.log(dept1); // { id: 6, name: 'Новое название отдела', employees_count: 50 }
    console.log(dept2); // { id: 7, name: 'Отдел маркетинга', employees_count: 20 }
    
    if (!dept1 || !dept2) {
        throw new Error("Один из отделов не существует!");
    }
    
    if (dept1.id === dept2.id) {
        throw new Error("Выберите два разных отдела!");
    }

    const employeesToMove = dept1.employees_count;
    dept1.employees_count = 0;
    dept2.employees_count += employeesToMove;
}

moveEmployees(6, 7);
console.log(getDepartmentById(6)); // { id: 6, name: 'Новое название отдела', employees_count: 0 }
console.log(getDepartmentById(7)); // { id: 7, name: 'Отдел маркетинга', employees_count: 70 }
