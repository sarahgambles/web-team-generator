const ManagerTest = require('../lib/Manager');

test ("see if we can create a manager object", () => {
    const manager = new ManagerTest();
    expect(typeof(manager)).toBe("object");
});

test ("set name through constructor", () => {
    const name = 'Alexis';
    const manager = new ManagerTest(name);
    expect(manager.name).toBe(name);
});

test ("set id using constructor", () => {
    const id = 14;
    const manager = new ManagerTest('Alexis', id);
    expect(manager.id).toBe(id);
});

test ("set email using constructor", () => {
    const email = 'alexis@schittscreek.com';
    const manager = new ManagerTest('Alexis', 1, email);
    expect(manager.email).toBe(email);
});