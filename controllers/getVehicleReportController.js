console.log('inside report controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails report controller:: ');
        // Calling getVehicle service 
        const userToken = req.query.token;
        const validToken = userToken == 'dcc921361dbab401f92cbfb7c6a8752d49171B5760B97B650D5697E3C526857D0CBBF907' ? true : false;
        if(validToken){
            const reportFrom = (new Date(req.query.from).getTime() / 1000);
            const reportTo = (new Date(req.query.to).setHours(23, 59) / 1000);
            // const reportType = req.query.report;
            console.log('token :: '+ userToken);
            console.log('from :: '+ reportFrom);
            console.log('to :: '+ reportTo);
            console.log('reportType :: '+ reportType);
            const report = true;
            const vehicleData = await getVehicleService.getVehicleServices(userToken, reportFrom, reportTo, report);
            res.send(vehicleData);
        }else{
            res.send('Invalid Token');
        }
        
    }catch(err){
        return err;
    }
    
}

module.exports = getVehicleDetails;


