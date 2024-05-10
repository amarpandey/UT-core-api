console.log('inside report controller');
const getVehicleService = require('../services/getVehicleService');

const getVehicleDetails = async (req, res)=>{
    try{
        console.log('inside getVehicleDetails report controller:: ');
        // Calling getVehicle service 
        const userToken = req.query.token;
        const validToken = (userToken == 'bf47aba64fc9c34903b783df2d49d38f75F26D19B1833ED8DB6EFBC1C0D6668559333C48') ? true : false;
        if(validToken){
            // const reportFrom = (new Date(req.query.from).getTime() / 1000);
            // const reportTo = (new Date(req.query.to).setHours(23, 59) / 1000);

            const reportFrom = req.query.from;
            const reportTo = req.query.to;
            // const reportType = req.query.report;
            console.log('token :: '+ userToken);
            console.log('from :: '+ reportFrom);
            console.log('to :: '+ reportTo);
            // console.log('reportType :: '+ reportType);
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


