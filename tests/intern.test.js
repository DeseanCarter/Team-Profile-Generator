const Intern = require('../lib/intern')

test("Is this intern going to be an object", () => {
    const e = new Intern()
    expect(typeof(e)).toBe("object")
})

test("Are we able to check methods of constructor, does it work", () => {
    const github = "Carter"
    const e = new Intern("Carter", 9, "dc@gmail.com", github)
    expect(e.getName()).toBe(github)
})

test("Are we able to check methods of constructor, does it work", () => {
    const school = "DeseanCarter"
    const e = new Intern("Carter", 9, "deseancarter@gmail.com", school)
    expect(e.getSchool()).toBe(school)
})

test("Are we able to check methods of constructor, does it work", () => {
    const role = "Intern"
    const e = new Intern("Carter", 9, "DeseanCarter@gmail.com")
    expect(e.getRole()).toBe(role)
})