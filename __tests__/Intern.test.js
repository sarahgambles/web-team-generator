const InternTest = require('../lib/Intern');

test ("see if we can create an intern object", () => {
    const intern = new InternTest();
    expect(typeof(intern)).toBe("object");
})

test ("set name using constructor", () => {
    const name = 'Johnny';
    const intern = new InternTest(name);
    expect(intern.name).toBe(name);
})

test ("set id using constructor", () => {
    const id = 26;
    const intern = new InternTest('Johnny', id);
    expect(intern.id).toBe(id);
})

test ("set email using constructor", () => {
    const email = 'johnny@rose.com';
    const intern = new InternTest('Johnny', 1, email);
    expect(intern.email).toBe(email);
})