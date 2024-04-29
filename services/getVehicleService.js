
const axios = require('axios');
const { report } = require('process');



const getVehicleServices = async (sidToken) =>{
    try {
      console.log(`welcome to get vehicle service`);
      // return 'hello';
      
      const res = await axios({
          method: 'POST',
          url:'https://hst-api.wialon.com/wialon/ajax.html',
          params:{
              svc: 'token/login',
              params: '{"token":"dcc921361dbab401f92cbfb7c6a8752d49171B5760B97B650D5697E3C526857D0CBBF907","operateAs":"","appName":"","checkService":""}'
          }
      });
     
      let sid = res.data.eid;
      console.log('sid' + sid);

      // Making vehicle detail call
      console.log(`welcome to get vehicle data`);
      const vehicleList = await axios({
          method: 'get',
          url:'https://hst-api.wialon.com/wialon/ajax.html',
          params:{
              svc: 'core/search_items',
              params: '{"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"*","sortType":"sys_name"},"force":1,"flags":1,"from":0,"to":0}',
              sid: sid
          }
      });


      const vehicleData = responseData.data;
      return vehicleData;

      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
module.exports = {getVehicleServices};