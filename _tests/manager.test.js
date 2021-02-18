const Manager = require("../lib/manager");

it("get office number", () => {
    const newManager = new Manager('Tom', 1, 'test@gmail.com', 2)
  expect(newManager.officeNumber).toBe(2)
});

it("getting role", () => {
    const newManager = new Manager('Tom', 1, 'test@gmail.com', 2)
  expect(newManager.getRole()).toBe("Manager")
});
