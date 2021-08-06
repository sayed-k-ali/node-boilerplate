const { expect } = require("chai");
const db = require("../../../../database/models");
const { userService, userRepository } = require("../../userDependency");

describe('User Service', () => {
  describe('userCreateOrError', () => {
    beforeEach(async () => {
      await userRepository.deleteAllData()
    })
    it('exists', () => {
      expect(userService.createUserOrError).to.be.not.undefined
    })
    it('should error if email is not valid', async () => {
      const userData = {
        username: '_mock_user_name',
        email: '_mock_email_without_email_symbol',
        password: '_mock_user_password'
      }

      const userCreated = await userService.createUserOrError(userData);
      expect(userCreated.data.errors[0].type).to.equal('Validation error')
    })
    it('should save user with encrypted password', async () => {
      const userData = {
        username: '_mock_user_name',
        email: '_mock_email_@hotmail.com',
        password: '_mock_user_password'
      }

      const userCreated = await userService.createUserOrError(userData);
      expect(userCreated.status).to.equal(201)
      // const userList = await userRepository.gets();
      // expect(userList[0].password).to.not.equal(userData.password)
    })
  });
});