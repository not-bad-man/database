const connect = require('../../dao/utils');

module.exports = (query, callback) => {
   connect(query, (err, data) => {
      if (err) {
         console.log(__dirname, 33333333);
         throw new Error(err);
      }

      console.log(data)
      callback(data)                       //返回正确的查询结果
   });
}