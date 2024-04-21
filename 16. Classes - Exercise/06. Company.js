class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(currName, currSalary, currPosition, currDepartment) {
        if ((!currName || !currSalary || !currPosition || !currDepartment || currSalary < 0) && currSalary !== 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments.hasOwnProperty(currDepartment)) {
            this.departments[currDepartment] = {
                sumSalaries: 0,
                avgSalary: 0,
                employees: []
            }
        }

        let currentDepartment = this.departments[currDepartment];
        currSalary = Number(currSalary);

        currentDepartment.employees.push({
            name: currName,
            salary: currSalary,
            position: currPosition
        })

        this._updateDepartmentSalaries(currentDepartment, currSalary);
        return `New employee is hired. Name: ${currName}. Position: ${currPosition}`;
    }

    bestDepartment() {
        let [bestDepartmentName, bestDepartmentData] = this._findBestDepartment();
        bestDepartmentData.employees.sort((emp1, emp2) => emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name));

        let result = `Best Department is: ${bestDepartmentName}\n`;
        result += `Average salary: ${bestDepartmentData.avgSalary.toFixed(2)}`;
        bestDepartmentData.employees.forEach(employee => result += `\n${employee.name} ${employee.salary} ${employee.position}`);

        return result;
    }

    _findBestDepartment() {
        return Object.entries(this.departments).sort((depA, depB) => depB[1].avgSalary - depA[1].avgSalary)[0];
    }

    _updateDepartmentSalaries(department, salary) {
        department.sumSalaries += salary;
        department.avgSalary = department.sumSalaries / department.employees.length;
    }
}


let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Construction"));
console.log(c.addEmployee("Pesho", 1500, "electrical engineer", "Construction"));
console.log(c.addEmployee("Slavi", 500, "dyer", "Construction"));
console.log(c.addEmployee("Stan", 2000, "architect", "Construction"));
console.log(c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing"));
console.log(c.addEmployee("Pesho", 1000, "graphical designer", "Marketing"));
console.log(c.addEmployee("Gosho", 1350, "HR", "Human resources"));
console.log(c.bestDepartment());

