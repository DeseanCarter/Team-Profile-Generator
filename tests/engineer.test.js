const Engineer = require('../lib/engineer')

test("Is this engineer going to be an object", () => {
    const e = new Engineer()
    expect(typeof(e)).toBe("object")
})

test("Are we able to check methods of constructor, does it work", () => {
    const github = "Carter"
    const e = new Engineer("Carter", 9, "dc@gmail.com", github)
    expect(e.getName()).toBe(github)
})

test("Are we able to check methods of constructor, does it work", () => {
    const github = "DeseanCarter"
    const e = new Engineer("Carter", 9, "deseancarter@gmail.com", github)
    expect(e.getGithub()).toBe(github)
})

test("Are we able to check methods of constructor, does it work", () => {
    const role = "Engineer"
    const e = new Engineer("Carter", 9, "DeseanCarter@gmail.com")
    expect(e.getRole()).toBe(role)
})