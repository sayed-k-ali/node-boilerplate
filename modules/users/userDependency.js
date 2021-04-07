const UserController = require("./controller");
const UserModel = require("./model");
const UserRepository = require("./repository");
const UserService = require("./service");


const userRepository = new UserRepository({model: UserModel});
const userService = new UserService({repository: userRepository});
const userController = new UserController({service: userService});

module.exports = {
  userController,
  userService,
  userRepository
};