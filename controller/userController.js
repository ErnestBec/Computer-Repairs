const { User } = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

const userById = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json({
      user,
    });
  } catch (err) {
    console.log(error);
  }
};
const updateUserById = async (req, res) => {
  try {
    const { user } = req;
    const { name, email } = req.body;

    await user.update({ name, email });

    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { user } = req;
    await user.update({ status: 'deleted' });
    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, createUser, userById, updateUserById, deleteUser };
