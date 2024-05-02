console.log('inside route');

const express = require('express');
const router = express.Router();
const getVehicleController = require('../controllers/getVehicleController');

router.route("/").get((req, res)=>{
    res.send('Welcome to Ultratech vehicle report service');
});
router.route("/getvehicleslist").get(getVehicleController)
router.route("/getreport").get(getVehicleReportController)

module.exports = router; 