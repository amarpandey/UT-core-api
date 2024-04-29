console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails controller:: ');
        // Calling getVehicle service 
        const userToken = req.query.token;
        const validToken = userToken == 'dcc921361dbab401f92cbfb7c6a8752d49171B5760B97B650D5697E3C526857D0CBBF907' ? true : false;
        if(validToken){
            const vehicleData = await getVehicleService.getVehicleServices(userToken);
            res.send(vehicleData);
        }else{
            res.send('Invalid Token');
        }
        
    }catch(err){
        return err;
    }
    
}

module.exports = getVehicleDetails;


