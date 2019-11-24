const connect = require('../../dao/utils');
const query = require('./query');

module.exports = (querystr, callback) => {

   let no = (/(?<=no \= )(\d{10})/).exec(querystr)[0];        // delete from table where column = value;
   let str = `select count(1) as count from student where no = ${no}`;
   new Promise( (res) => {
      query(str, (data) => {                           //查询插入信息是否已存在
         res(data)
      });
   })
   .then( (data) => {

      if (data[0].count == 1) {
         connect(querystr, (err) => {
            if (err) {
               console.log(__dirname, 11111);
               throw new Error(err);
            }
            callback({
               res: true,
               mes: '删除信息成功'
            });                       //返回正确的查询结果
         
         });

      } else {

         callback({
            res: false,
            mes: '该信息不存在'
         })
         
      }
   })

}


//
//  insert into student(student.`no`,student.`name`, student.sex, student.age, student.depar_no, student.id_no)
//  values(2016217701, '曹操', '男', 21, 1111, '341124199612185211'),
//
