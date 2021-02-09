//import
const Employee = require('../lib/employee')

test("Is this employee going to be an object", () => {
    const e = new Employee()
    expect(typeof(e)).toBe("object")
})


// is it an actual object
test("Are we able to pass arg name through constructor, does it work", () => {
    const name = "Carter"
    const e = new Employee(name)
    expect(e.name).toBe(name)
})

test("Are we able to pass arg name through constructor, does it work", () => {
    const id = 1
    const e = new Employee("Carter", id)
    expect(e.id).toBe(id)
})

test("Are we able to pass arg name through constructor, does it work", () => {
    const email = "deseancarter@gmail.com"
    const e = new Employee("Carter", 5, email)
    expect(e.email).toBe(email)
})

test("Are we able to check methods of constructor, does it work", () => {
    const name = "Carter"
    const e = new Employee(name)
    expect(e.getName()).toBe(name)
})

test("Are we able to check methods of constructor, does it work", () => {
    const id = 9
    const e = new Employee("Carter", id)
    expect(e.getId()).toBe(id)
})

test("Are we able to check methods of constructor, does it work", () => {
    const role = "Employee"
    const e = new Employee("Carter", 9, "DeseanCarter@gmail.com")
    expect(e.getRole()).toBe(role)
})

test("Are we able to check methods of constructor, does it work", () => {
    const email = "deseancarter@gmail.com"
    const e = new Employee("Carter", 9, email)
    expect(e.getEmail()).toBe(email)
})
// values
    //name
    //email
    //id
    //methods
        //getnaem
        //getrole
        //getid

