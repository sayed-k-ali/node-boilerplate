const { userController } = require('../userDependency');

const router = require('express').Router();

router.route('/')
  .post(userController.create)
  .get(userController.getAllUser)

/**
 *ini kalo mau nambah2 url, dan ini base endpoint nya /user
 *
 */
router.route('/verify')
  .post()

module.exports.UserRouter = router;
