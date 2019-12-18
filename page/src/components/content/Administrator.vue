<template>
   <div class="administrator_result">
      <div class="administrator_search">
         姓名：<input v-model="adName" type="text">
         性别：<input v-model="adSex" type="text"><br>
         身份证号：<input v-model="adID" type="text">
         楼号：<input v-model="building" type="text">
         <input type="submit" value="查询" @click="submit">
      </div>

      <table id="administrator_content" border="1" cellspacing='0' cellpadding='0'>
         <tr>
            <th>姓名</th>
            <th>性别</th>
            <th>身份证号</th>
            <th>楼号</th>
         </tr>
         <tr v-for="(item, index) in list" :key="index">
            <td>{{item.adName}}</td>
            <td>{{item.adSex}}</td>
            <td>{{item.adID}}</td>
            <td>{{item.building}}</td>
         </tr>
      </table>

   </div>
</template>

<script>
export default {
   name: 'administrator', 
   data () {
      return {
         adName: '',
         adSex: '',
         adID: '',
         building: '',
         list: [
            {
               adName: 'fdafds',
               adSex: '女',
               adID: 134234123412345678,
               building: 12
            }
         ]
      }
   },
   created () {
      if (this.bus.administrator) {
         this.list = this.bus.administrator;
      } else {
         //发送请求
      }
   },
   methods: {
      submit () {
         let {adName, adSex, adID, building} = this.$data;
         let data = {adName, adSex, adID, building};

         if ( adName && (adName.length > 3) ) {
            alert('你这名字也忒长了，国外来的吧');
            return;
         }

         if ( adSex && (['男', '女'].indexOf(adSex) == -1) ) {
            alert('好好填，不然我吐槽了');
            return;
         }

         if ( adID && !(/[1-9][0-9]{17}/g).test(adID) ) { 
            alert('不填拉倒，我找不费电的吗');
            return;
         }

         if ( building && !(/(?:[0-9])[1-9]/g).test(building) ) {
            alert('这栋楼本宝宝找不到');
            return;
         }


         //发送请求

      }
   }
}
</script>


<style>
.administrator_result {
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
}

.administrator_search {
   width: 60%;
   margin: 20px auto;
   line-height: 35px;
   text-align: left;
}

.administrator_search input {
   margin-right: 30px;
}

#administrator_content {
   display: inline-block;
   margin: 20px auto;
}

td, th{
   width: 200px;
}
</style>