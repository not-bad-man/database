const mysql = require('mysql');

const Pool = mysql.createPool({
   host: '127.0.0.1',
   port: '3306',
   password: 'yinjie', 
   user: 'root',
   database: 'department_manage'
})



const connect  = (querystr, callback) => {                //callback
   Pool.getConnection( (err, connection) => {
      if (err) {
         throw new Error(err);
      }
      console.log(__dirname, querystr)
      connection.query(querystr,callback);              //callback(err,)

      connection.release();

   })
}

// connect('select * from department limit 5', (err, data) => {
//    console.log('data', data)
// })


module.exports = connect;    


// Pool.getConnection( (err, connection) => {
//    if (err) {
//       throw new Error(err)
//    } 

//    connection.query('select * from department where depar_no = (select depar_no from student where name = "刘备")', (err, res) => {

//       if (err) {
//          throw new Error(err);
//       }

//       console.log(res);
//       // connection.release();
//    })


//    connection.query('select * from administrator', (err, res) => {

//       if (err) {
//          throw new Error(err)
//       }

//       console.log(res);
//       // connection.release();
//    })


//    connection.release();
// })