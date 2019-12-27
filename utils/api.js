function initApi(app) {
   /**
    * operationType: string; query | insert | update | delete
    * 
    * studentInfo: 
    * query, insert, update {
    *    stuNumber: ""
    *    stuName: ""
    *    stuSex: ""
    *    stuAge: ""
    *    stuID: ""
    * }
    * 
    * delete: {
    *    stuNumber: ""s
    * }
    */
   app.all('/student', require('../web/student_control'));

   // app.get('/student', (req, res) => {
   //    res.writeHead(200);
   //    res.write(JSON.stringify(arr));
   //    res.end();
   // })

   app.post('/administrator', require('../web/administrator_control'));
   // app.post('/fix', require('./web/fix_control'));
   // app.post('/visitor', require('./web/visitor_control'));
   // app.post('/department', require('./web/'))  


}

module.exports = initApi;