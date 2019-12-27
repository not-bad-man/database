const operationType = {
   query: 'query',
   insert: "insert",
   update: "update",
   delete: "delete"
}

const getAppTemplate = function (type) {
   appTemplate = {
      student: {
         apiUrl: 'http://localhost:12345/student',
         info: {
            stuNumber: "",
            stuName: "",
            stuSex: "",
            stuAge: "",
            stuID: ""
         },
         infoTemplte: [
            {
               key: 'stuNumber',
               label: '学号'
            },
            {
               key: 'stuName',
               label: '姓名'
            },
            {
               key: 'stuSex',
               label: '性别'
            },
            {
               key: 'stuAge',
               label: '年龄'
            },
            {
               key: 'stuID',
               label: '身份证号'
            },
         ],
         rules: {
            stuNumber: [
               { required: true, message: 'Please fill in the user number', trigger: 'change' }
            ],
            stuName: "",
            stuSex: "",
            stuAge: "",
            stuID: ""
         },
         cols: [
            {
               type: "selection",
               width: 60,
               align: "center"
            },
            {
               title: "学号",
               key: "stuNumber",
               align: "center",
               placeholder: '2016217712'
            },
            {
               title: "姓名",
               key: "stuName",
               align: "center"
            },
            {
               title: "性别",
               key: "stuSex",
               align: "center"
            },
            {
               title: "年龄",
               key: "stuAge",
               align: "center"
            },
            {
               title: "身份证",
               key: "stuID",
               align: "center",
               width: "144"
            }
         ]
      },
      department: {

      },
      visitor: {},
      fix: {},

   }
   return appTemplate[type];
}

module.exports = {
   operationType
}