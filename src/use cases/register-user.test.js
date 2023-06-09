const dbService = require("../services/db-service.js");
const registerUser = require("./register-user.js");

(async () => {
  const result = await registerUser({
    email: "jorge@test.com",
    password: "user1234",
    zipCode: "36330",
  });

  console.log(result);
  console.log(await dbService.getAllUsers());
})();
