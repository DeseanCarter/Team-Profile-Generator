const Manager = require('../lib/manager')
const Intern = require('../lib/manager')

test("Is this manager going to be an object", () => {
    const e = new Manager()
    expect(typeof(e)).toBe("object")
})

test("Are we able to check methods of constructor, does it work", () => {
    const github = "Carter"
    const e = new Manager("Carter", 9, "dc@gmail.com", github)
    expect(e.getName()).toBe(github)
})

test("Are we able to check methods of constructor, does it work", () => {
    const officeNumber = "DeseanCarter"
    const e = new Manager("Carter", 9, "deseancarter@gmail.com", officeNumber)
    expect(e.getOfficeNumber()).toBe(officeNumber)
})

test("Are we able to check methods of constructor, does it work", () => {
    const role = "Manager"
    const e = new Manager("Carter", 9, "DeseanCarter@gmail.com")
    expect(e.getRole()).toBe(role)
})