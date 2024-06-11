function getEmployeeInfo(employeeName) {
    const employeeNames = ['John', 'Andrea', 'Kevin', 'Ben', 'Katy'];
    const employeeSalaries = [1200, 1300, 1500, 1400, 1500];
    const employeeIndex = employeeNames.indexOf(employeeName);
    if (!(employeeNames.includes(employeeName))) {
        return null;
    } else {
        const result = [];
        result.push(employeeNames[employeeIndex], employeeSalaries[employeeIndex]);
        return result;
    }
   

}

console.log(getEmployeeInfo('Kevin'));
console.log(getEmployeeInfo('Maria'));