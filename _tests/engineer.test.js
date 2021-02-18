const Engineer = require("../lib/engineer");

it("getting github account", () => {
    const newEngineer = new Engineer('Tom', 1, 'test@gmail.com', "github")
  expect(newEngineer.gitHub).toBe("github")
});

it("getting role", () => {
    const newEngineer = new Engineer('Tom', 1, 'test@gmail.com', "github")
  expect(newEngineer.getRole()).toBe("Engineer")
});

