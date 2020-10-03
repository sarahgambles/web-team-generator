const EmployeeTest = require('../lib/Employee');


test("see if we can create an employee object", () => {
    const employee = new EmployeeTest();
    expect(typeof(employee)).toBe("object");
});

test("set name through constructor", () => {
    const name = 'David';
    const employee = new EmployeeTest(name);
    expect(employee.name).toBe(name);
})

test("set id using constructor", () => {
    const id = 17;
    const employee = new EmployeeTest('David', id);
    expect(employee.id).toBe(id);
})

test("set email using constructor", () => {
    const email = 'david@schittscreek.com';
    const employee = new EmployeeTest('David', 1, email);
    expect(employee.email).toBe(email);
})