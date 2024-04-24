console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails controller:: ');
        // Calling getVehicle service 
        const userToken = req.query.token;
        const vehicleData = await getVehicleService.getVehicleServices(userToken);
        res.send(vehicleData);
    }catch(err){
        return err;
    }
    
}

module.exports = getVehicleDetails;


