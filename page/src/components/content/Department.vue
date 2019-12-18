<template>
   <div class="department_result">
      <div class="department_search">
         楼号：<input v-model="building" type="text">
         南/北楼：<input v-model="direct" type="text"><br>
         层号：<input v-model="floor" type="text">
         房号：<input v-model="room" type="text">
         <input type="submit" value="查询" @click="submit">
      </div>

      <table id="department_content" border="1" cellspacing='0' cellpadding='0'>
         <tr>
            <th>楼号</th>
            <th>南/北楼</th>
            <th>层号</th>
            <th>房号</th>
         </tr>
         <tr v-for="(item, index) in list" :key="index">
            <td>{{item.building}}</td>
            <td>{{item.direct}}</td>
            <td>{{item.floor}}</td>
            <td>{{item.room}}</td>
         </tr>
      </table>

   </div>
</template>

<script>
export default {
   name: 'department', 
   data () {
      return {
         building: '',
         direct: '',
         floor: '',
         room: '',
         list: [
            {
               building: 1,
               direct: '南',
               floor: 1,
               room: 6
            }
         ]
      }
   },
   created () {
      if (this.bus.department) {
         this.list = this.bus.department;
      } else {
         //发送请求
      }
   },
   methods: {
      submit () {
         let {building, direct, floor, room} = this.$data;

         if ( building && !(/^([1-9]+)$/g).test(building) ) {
            alert('宝宝找不到这栋楼');
            return;
         }

         if (direct && ['南','北'].indexOf(direct)==-1 ) {
            alert('要么是南边，要么是北边，别乱填');
            return;
         }

         if (floor && !(/^([1-6]+)$/g).test(floor) ) {
            alert('你确定这栋楼不在天上');
            return;
         }

         if (room && !(/^([1-2][1-9])$/g).test(room)) {
            alert('这层压根没这间房，哥们');
            return;
         }

         //查询请求



      }
   }
}
</script>


<style>
.department_result {
   width: 100%;
   padding: 20px;
   box-sizing: border-box;
}

.department_search {
   width: 80%;
   margin: 20px auto;
   line-height: 35px;
   text-align: left;
}

.department_search input {
   margin-right: 30px;
}

#department_content {
   display: inline-block;
   margin: 20px auto;
}

td, th{
   width: 200px;
}
</style>