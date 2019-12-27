const connect = require('../../dao/utils');
const query = require('./query');

module.exports = (studentInfo, callback) => {

   const insertStr = `insert into student(stuName, stuSex, stuAge, stuID, depar_no) 
   values('${studentInfo.stuName}','${studentInfo.stuSex}', '${studentInfo.stuAge}', '${studentInfo.stuID}', ${studentInfo.depar_no})`

   let str = `select count(1) as count from student where stuID = '${studentInfo.stuID}'`;
   new Promise( (res) => {
      query(str, (data) => {                           //查询插入信息是否已存在
         res(data)
      });
   })
   .then( (data) => {
      if (data.length === 0) {
         connect(insertStr, (err) => {
            if (err) {
               console.log(__dirname, 11111, err);
               callback({
                  res: false,
                  mes: '添加失败，填写信息错误'
               })
            }
            callback({
               res: true,
               mes: '添加信息成功'
            });
         });
      } else {
         callback({
            res: false,
            mes: '该人已在系统中'
         })
      }
   })
}


//
//  insert into student(student.`no`,student.`name`, student.sex, student.age, student.depar_no, student.id_no)
//  values(2016217701, '曹操', '男', 21, 1111, '341124199612185211'),
//
//