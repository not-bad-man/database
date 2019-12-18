<template>
   <div class="student_result">

      <div class="student_search">
         学号：<input v-model="no" type="text">
         姓名：<input v-model="name" type="text">
         性别：<input v-model="sex" type="text"><br>
         年龄：<input v-model="age" type="text">
         身份证号：<input v-model="id_no" type="text">
         <input type="submit" value="查询" @click="submit">
      </div>

      <table id="student_content" border="1" cellspacing='0' cellpadding='0'>
         <tr>
            <th>学号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>身份证号</th>
         </tr>
         <tr v-for="(item, index) in list" :key="index">
            <td>{{item.no}}</td>
            <td>{{item.name}}</td>
            <td>{{item.sex}}</td>
            <td>{{item.age}}</td>
            <td>{{item.id_no}}</td>
         </tr>
      </table>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'student', 
   data () {
      return {
         list: [
            {
               no: 2016217710, 
               name: 'hehe',
               sex: '男',
               age: 21,
               id_no: 123456465789,
               depar_no: 1111
            },
            {
               no: 2016217710, 
               name: 'hehe',
               sex: '男',
               age: 21,
               id_no: 123456465789,
               depar_no: 1111
            },
            {
               no: 2016217710, 
               name: 'hehe',
               sex: '男',
               age: 21,
               id_no: 123456465789,
               depar_no: 1111
            }
         ],
         no: '', 
         name: '', 
         sex: '',
         age: '',
         id_no: ''
      }
   },
   created () {
      if (this.bus) {
         this.list = this.bus.student;
         // alert('exist')
         // 使用上次请求的数据
      } else {
         // alert('not exist')
         // 请求数据
      }
   },
   methods: {
      submit () {
         let no = this.no,
             name = this.name,
             sex = this.sex,
             age = this.age,
             id_no = this.id_no;
         let data = {};

         if (no && !(/[1-9][0-9]{7}/g).test(no) ) {
            alert('好好填学号，不然怎么查');
            return;
         } else {
            data.no = no;
         }

         if ( name && (name.length > 3) ) {
            alert('你这名字也忒长了，国外来的吧');
            return;
         } else {
            data.name = name;
         }

         if ( sex && (['男', '女'].indexOf(sex) == -1) ) {
            alert('好好填，不然我吐槽了');
            return;
         } else {
            data.sex = sex;
         }

         if ( age && !(/[1-9][0-9]/g).test(age) ) {
            
            alert('别呀，你这填的啥年龄啊，恕臣妾不能帮你找');
            return;

         } else if ( parseInt(age) < 15 || parseInt(age) > 26 ) { 

            alert('我觉得这个年龄不适合上大学');
            return;

         } else {
            data.age = age;
         }

         if ( id_no && !(/[1-9][0-9]{17}/g).test(id_no) ) {
            
            alert('不填拉倒，我找不费电的吗');
            return;

         } else {
            data.id_no = id_no;
         }

         //发送查找请求，并保存数据
         // console.log(this.no, this.name, this.sex, this.age, this.id_no)
         axios.put('/student', data)
         .then( () => {

         })
         .catch( () => {
            
         })

      }
   }
}
</script>


<style>
.student_result {
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
}

.student_search {
   width: 80%;
   margin: 20px auto;
   line-height: 35px;
   text-align: left;
}

.student_search input {
   margin-right: 30px;
}

#student_content {
   display: inline-block;
   margin: 20px auto;
}

td, th{
   width: 200px;
}
</style>