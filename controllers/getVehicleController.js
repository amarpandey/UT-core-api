console.log('inside controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails controller:: ');
        // Calling getVehicle service 
        const userToken = req.query.token;
        const validToken = (userToken == 'bf47aba64fc9c34903b783df2d49d38f75F26D19B1833ED8DB6EFBC1C0D6668559333C48') ? true : false;
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


