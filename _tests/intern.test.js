const Intern = require("../lib/intern");

it("method for getting school", () => {
    const newIntern = new Intern('Tom', 1, 'test@gmail.com', 'school')
  expect(newIntern.getschool()).toBe('school')
});

it("method for getting role", () => {
    const newIntern = new Intern('Tom', 1, 'test@gmail.com', "school")
  expect(newIntern.getRole()).toBe("Intern")

});
