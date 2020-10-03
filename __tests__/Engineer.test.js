const EngineerTest = require ('../lib/Employee');

test ("see if we can create an engineer object", () => {
    const engineer = new EngineerTest();
    expect (typeof(engineer)).toBe("object");
})

test ("set name through constructor", () => {
    const name = 'Moira';
    const engineer = new EngineerTest(name);
    expect(engineer.name).toBe(name);
})

test ("set id using constructor", () => {
    const id = 30;
    const engineer = new EngineerTest('Moira', id);
    expect(engineer.id).toBe(id);
})

test ("set email using constructor", () => {
    const email = 'moira@schittscreek.com';
    const engineer = new EngineerTest('Moira', 1, email);
    expect(engineer.email).toBe(email);
})