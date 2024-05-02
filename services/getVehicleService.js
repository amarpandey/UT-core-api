
const axios = require('axios');
const { report } = require('process');



const getVehicleServices = async (token, reportFrom, reportTo, report) =>{
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
      let vehicleData;

      if(report){
        console.log('Inside data report ::');
        // Making vehicle detail call
        console.log(`welcome to get vehicle data`);
        const vehicleReport = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'report/exec_report',
                params: '{"reportResourceId":26039013,"reportTemplateId":7,"reportTemplate":null,"reportObjectId":"26121320","reportObjectSecId":0,"interval":{"from":'+reportFrom+',"to":'+reportTo+',"flags":0}}',
                sid: sid
            }
        });

        console.log(vehicleReport);
        const resultRows = vehicleReport.layerCount;
        console.log(resultRows);  

        // Fetching result rows
        // Making vehicle detail call
        const resultRowsData = await axios({
            method: 'get',
            url:'https://hst-api.wialon.com/wialon/ajax.html',
            params:{
                svc: 'report/get_result_rows',
                params: '{"tableIndex":0,"indexFrom":0,"indexTo":100}',
                sid: sid
            }
        });

        const responseData = [
            {
            "mapping":[
                "id",
                "grouping",
                "distance",
                "fuel_consumption",
                "engine_hours",
                "avg_consumption",
                "filled",
                "stolen",
                "max_speed",
                "parkings"
            ]
            },
            {
            "data":resultRowsData.data
            }
        ];

        vehicleData = responseData;
      }else{
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


        vehicleData = vehicleList.data.items;
      }
      
      return vehicleData;

      } catch (error) {
        console.error(error); // `error` will be whatever you passed to `reject()` at the top
      }
}
module.exports = {getVehicleServices};