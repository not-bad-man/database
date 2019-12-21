const insert = require('../service/administrator/insert');
const query = require('../service/administrator/query');
const del = require('../service/administrator/delete');
const update = require('../service/administrator/update');


module.exports = (req, res) => {

   const body = req.body;
   const type = body.type;
   // console.log('body', req.body);

   if (type === 'query') { //查询数据

      new Promise( (resolve) => {
         query(body.query, resolve);
      })
      .then( (data) => {
   
         res.writeHead(200);
         res.write(JSON.stringify(data));
         res.end()
            
      })
   
   } else if (type === 'insert') { //添加数据
      
      new Promise( (resolve) => {
         insert(body.query, resolve);
      })
      .then( (data) => {
   
         res.writeHead(200);
         // console.log(data)
         res.write(JSON.stringify(data));         //data{res(bool), mes(string)}
         res.end()
            
      })

   } else if (type === 'delete') { //删除数据

      new Promise( (resolve) => {
         del(body.query, resolve);
      })
      .then( (data) => {
   
         res.writeHead(200);
         res.write(JSON.stringify(data));
         res.end()
            
      })
 
   } else if (type === 'update') { //修改数据

      new Promise( (resolve) => {
         update(body.query, resolve);
      })
      .then( (data) => {

         res.writeHead(200);
         res.write(JSON.stringify(data));
         res.end();

      })

   }


}