<template>
   <div class="fix_result">
      <div class="fix_search">
         故障原因：<input v-model="rReason" type="text">
         保修日期：<input v-model="rDate" type="date"><br>
         保修房间：<input v-model="rRoom" type="text" placeholder="例如：1023">
         修理状态：<input v-model="rStatus" type="text" placeholder="已修好/待修中">
         <input type="submit" value="查询" @click="submit">
      </div>

      <table id="fix_content" border="1" cellspacing='0' cellpadding='0'>
         <tr>
            <th>故障原因</th>
            <th>保修日期</th>
            <th>保修房间</th>
            <th>修理状态</th>
         </tr>
         <tr v-for="(item, index) in list" :key="index">
            <td>{{item.rReason}}</td>
            <td>{{item.rDate}}</td>
            <td>{{item.rRoom}}</td>
            <td>{{item.rStatus}}</td>
         </tr>
      </table>

   </div>
</template>

<script>
export default {
   name: 'fix', 
   data () {
      return {
         rReason: '',
         rDate: '',
         rStatus: '',
         rRoom: '',
         list: [
            {
               rReason: '瓦特了',
               rDate: '2019-6-8',
               rStatus: '待修中',
               rRoom: 1111
            }
         ]
      }
   },
   created () {
      if (this.bus.fix) {
         this.list = this.bus.fix;
      } else {
         //发送请求，保存数据
      }
   },
   methods: {
      submit () {
         let {rReason, rDate, rStatus, rRoom} = this.$data;

         // if ( rReason &&  )
         // console.log(rDate)
         // if (rStatus && rStatus)

         if ( rRoom && !(/^([1-3][1-2][1-5][1-6])$/g).test(rRoom) ) {
            console.log('hello')
            alert('本宝宝找不到这间房');
            return;
         }


         //发送查询请求

      }
   }
}
</script>


<style>
.fix_result {
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
}

.fix_search {
   width: 80%;
   margin: 20px auto;
   line-height: 35px;
   text-align: left;
}

.fix_search input {
   margin-right: 30px;
}

#fix_content {
   display: inline-block;
   margin: 20px auto;
}

td, th{
   width: 200px;
}
</style>