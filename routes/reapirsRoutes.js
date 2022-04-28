//Import express
const express = require('express');

//Midleweres
const { repairPending } = require('../middlewares/repairs_middlewares');

//controllers
const {
  getReapir,
  createRepair,
  getRepairById,
  updateRepair,
  deleteRepair,
} = require('../controller/reapirController');

const router = express.Router();

router.get('/', getReapir);
router.post('/', createRepair);

router
  .route('/:id')
  .get(repairPending, getRepairById)
  .patch(repairPending, updateRepair)
  .delete(repairPending, deleteRepair);
module.exports = { repairRouter: router };
