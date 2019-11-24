const connect = require('../../dao/utils');
const query = require('./query');

module.exports = (querystr, callback) => {
   let adID = (/(?<=adID \= )(\d{18})/g).exec(querystr)[0];
   // let obj = (/( \w+ = \'\S+)/).exec(querystr)[0].split('=');

   let obj = querystr.split('set')[1].split('where')[0].trim().split('=');
   
   let key = obj[0].trim();
   let value = obj[1].indexOf('\'') != -1 ? obj[1].trim().split('\'')[1] : obj[1].trim();

   console.log(key, value)
   let str = `select ${key} from student where adID = ${adID}`;
   new Promise( (res) => {
      query(str, (data) => {                           //查询更新信息是否存在
         res(data)
      });
   })
   .then( (data) => {

      if (data.length === 1) {

         if (data[0][key] == value) {
            callback({
               res: true,
               mes: '与原数据相同'
            })
            return ;
         }

         connect(querystr, (err) => {
            if (err) {
               throw new Error(err);
            }
            callback({
               res: true,
               mes: '更新信息成功'
            });                       //返回正确的查询结果
         });

      } else {
         callback({
            res: false,
            mes: '该数据不存在，不能更新'
         })
      }
   })

}




/*

   update administrator set key = value where key = value


*/