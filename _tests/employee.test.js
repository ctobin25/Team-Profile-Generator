
const Employee = require("../lib/employee");


describe("Employee class", () => {
    it("should create a new employee", () => {
      expect(typeof(new Employee())).toBe("object")
    });

    it("employee name", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.name).toBe("Tom")
    });

    it("create employee id", () => {
       const newEmployee = new Employee("Tom", 1)
        expect(newEmployee.id).toBe(1)
    });

    it("employee name", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.email).toBe("test@gmail.com")
    });

    it("employee class method for getName", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.getName()).toBe("Tom")
    });

    it("employee class method for getId", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.getId()).toBe(1)
    });

    it("employee class method for getEmail", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.getEmail()).toBe("test@gmail.com")
    });

    it("method for getting role", () => {
        const newEmployee = new Employee("Tom", 1, "test@gmail.com")
      expect(newEmployee.getRole()).toBe("Employee")
    });


})