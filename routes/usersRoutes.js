const express = require('express');

//Middleweres
const { userExist } = require('../middlewares/users_middlewares');

//Constrollers
const {
  getUsers,
  createUser,
  userById,
  updateUserById,
  deleteUser,
} = require('../controller/userController');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

router
  .route('/:id')
  .get(userExist, userById)
  .patch(userExist, updateUserById)
  .delete(userExist, deleteUser);
module.exports = { userRouter: router };
