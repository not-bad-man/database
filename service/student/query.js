const connect = require('../../dao/utils');

module.exports = (query, callback) => { // callback => resolve
   connect(query, (err, data) => {
      let res = [];
      if (!err) {
         res = data;
      } 

      if (callback && typeof callback === 'function') callback(res);
   });
}