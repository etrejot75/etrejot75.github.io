// Problem 1
const employees = [
  {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
  }
];

// Problem 2 
const company = {
    companyName: "Tech Stars",
    webpage : "www.techstars.site",
    employees: employees
};

console.log(company);

//problem 3: 
const addEmployee = {
    firstName: "Anna", 
    department: "Tech", 
    designation: "Executive", 
    salary: 25600, 
    raiseEligible: false
};

company.employees.push(addEmployee);

//console.log(company);

// Problem 4
let totalSalary = 0; 
company.employees.forEach(emp => {
    totalSalary += emp.salary 
}); 

console.log(`Total Salary: $${totalSalary}`);

//Problem 5: 
function applyRaise(companyEmp) {
    for (const emp of companyEmp.employees) {
        if (emp.raiseEligible) {
            emp.salary *= 1.1;
            emp.raiseEligible = false;
        }
    }
}

applyRaise(company);

//Problem 6
const workFromHome = ["Anna", "Sam"];

for (const emp of company.employees) {
    emp.workFromHome = workFromHome.includes(emp.firstName);
};

//console.log(company);