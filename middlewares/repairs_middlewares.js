//Models

const { Repair } = require('../models/reapirModel');

const repairPending = async (req, res, next) => {
  try {
    const { id } = req.params;
    const repair = await Repair.findOne({ where: { id, status: 'pending' } });
    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'user not Found given that id',
      });
    }

    //Add repair data req object
    req.repair = repair;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { repairPending };
