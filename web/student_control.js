const insert = require('../service/student/insert');
const query = require('../service/student/query');
const del = require('../service/student/delete');
const update = require('../service/student/update');
const { operateDatabase, transformObject } = require('../utils/tools');


module.exports = (req, res) => {

   const httpType = req.method;

   const operationDatabaseWithoutResponse = operateDatabase(res);

   if (httpType === 'GET') {
      
      // 查询全部
      operationDatabaseWithoutResponse((resolve) => {
         query('select * from student', resolve)
      });

   } else if (httpType === "POST") {
      const body = req.body;
      const type = body.operationType;
      const studentInfo = body.studentInfo;
      switch(type) {

         case 'query': {
            console.log(`select * from student where ${transformObject(studentInfo)}`)
            // 部分查询
            operationDatabaseWithoutResponse((resolve) => {
               query(`select * from student where ${transformObject(studentInfo)}`, resolve)
            })
            break;
         }
         case 'insert': {
            /**
             * insert into student(stuName, stuSex, stuAge, stuID, depar_no) 
                  values('hehehe', '男', '12', '341124199612185317', '3213')
             */
            // 新建学生

            new Promise( (resolve) => {
               insert(studentInfo, resolve);
            })
            .then( (data) => {
               res.writeHead(200);
               res.write(JSON.stringify(data));
               res.end()
            })
            break;
         }
         case 'update': {
            new Promise( (resolve) => {
               query(body.query, resolve);
            })
            .then( (data) => {
               res.writeHead(200);
               res.write(JSON.stringify(data));
               res.end()
            })
            break;
         }
         case 'delete': {
            new Promise( (resolve) => {
               query(body.query, resolve);
            })
            .then( (data) => {
               res.writeHead(200);
               res.write(JSON.stringify(data));
               res.end()
            })
            break;
         }
         default: {
            operationDatabaseWithoutResponse((resolve) => {
               query('select * from student', resolve)
            })
         }
      }
   }
}