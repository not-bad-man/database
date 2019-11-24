const connect = require('../../dao/utils');
const query = require('./query');

module.exports = (querystr, callback) => {

   let adID = (/(?<=values\(\')(\d{18})/).exec(querystr)[0];
   let str = `select count(1) as count from administrator where adID = ${adID}`;
   new Promise( (res) => {
      query(str, (data) => {                           //查询插入信息是否已存在
         res(data)
      });
   })
   .then( (data) => {
      console.log(data, data.length)
      if (data[0].count == 0) {
         connect(querystr, (err) => {
            if (err) {
               console.log(__dirname, 11111);
               throw new Error(err);
            }
            callback({
               res: true,
               mes: '添加信息成功'
            });                       //返回正确的查询结果
         
         });

      } else {

         callback({
            res: false,
            mes: '该人已在管理了其他楼层'
         })
         
      }
   })

}


//
   // insert into administrator(adID, adName, adSex, building)
   // values('123456789988424321', '齐木卡卡西', '男', 1)
//
//