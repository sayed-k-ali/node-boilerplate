const { userController } = require('../userDependency');

const router = require('express').Router();

router.route('/')
  .post(userController.create)
  .get(userController.getAllUser)

module.exports.UserRouter = router;