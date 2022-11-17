const router = require('express').Router();

const userController = require('../../controller/userController');

router
  .route('/:id')
  .get(userController.findOne)
  .post(userController.create)
  .delete(userController.delete)

  module.exports = router; 