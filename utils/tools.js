function operateDatabase (response, operationCallback) { // 抽离数据库操作的公共逻辑层
   response.setHeader("Content-Type", 'application/json; charset=utf-8')
   
   if (operationCallback) {
      return new Promise( (resolve) => {
         if (operationCallback && typeof operationCallback === 'function') {
            operationCallback(resolve);
         }
      })
      .then( (data) => {
         response.writeHead(200);
         response.write(JSON.stringify(data));
         response.end()
      })
   } else {
      return function (operationCallback) {
         return new Promise( (resolve) => {
            if (operationCallback && typeof operationCallback === 'function') {
               operationCallback(resolve);
            }
         })
         .then( (data) => {
            response.writeHead(200);
            response.write(JSON.stringify(data));
            response.end()
         })
      }
   }
}

/**
 * 
 *  { stuNumber: '',
     stuName: '',
     stuSex: 'dsafd',
     stuAge: '',
     stuID: '' }
 */
function transformObject (info) {
   let str = '';
   for (let key in info) {
      const value = info[key];

      if (value) {
         if (str) {
            str += ' and ';
         }

         str += `${key}=${info[key]}`
      }
   }
   return str;
}



module.exports = {
   operateDatabase,
   transformObject
}