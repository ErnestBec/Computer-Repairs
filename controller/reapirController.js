const { Repair } = require('../models/reapirModel');

const getReapir = async (req, res) => {
  try {
    const repair = await Repair.findAll();
    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};
const createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const newRepair = await Repair.create({ date, userId });

    res.status(201).json({ newRepair });
  } catch (error) {
    console.log(error);
  }
};
const getRepairById = async (req, res) => {
  try {
    const { repair } = req;
    // const { id } = req.params;

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateRepair = async (req, res) => {
  try {
    const { repair } = req;
    ///const { status } = req.body;
    await repair.update({ status: 'completed' });

    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};

const deleteRepair = async (req, res) => {
  try {
    const { repair } = req;
    // const { id } = req.params;
    // const user = await User.findOne({ where: { id } });

    await repair.update({ status: 'cancelled' });

    res.status(200).json({ status: 'succes' });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getReapir,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
};
