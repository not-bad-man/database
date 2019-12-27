<template>
   <div id='name'>
      <span class="title">公寓管理系统</span>
      <div class="nav">
         <Menu mode="horizontal" theme="light" active-name="1">
            <MenuItem name="1">
               <router-link class="content" tag="div" to="/student_search">
                  <Icon type="md-paper" />
                  学生查询
               </router-link>
            </MenuItem>
            <MenuItem name="2">
               <router-link class="content" tag="div" to="/department_search">
                  <Icon type="md-home" />
                  公寓查询
               </router-link>
            </MenuItem>
            <MenuItem name="3">
               <router-link class="content" tag="div" to="/fix_search">
                  <Icon type="ios-construct" />
                  维修查询
               </router-link>
            </MenuItem>
            <MenuItem name="4"> 
               <router-link class="content" tag="div" to="/administrator_search">
                  <Icon type="md-contacts" />
                  管理员查询
               </router-link>
            </MenuItem>
            <MenuItem name="5">
               <router-link class="content" tag="div" to="/visitor_search">
                  <Icon type="md-person" />
                  访客查询
               </router-link>
            </MenuItem>
         </Menu>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Name', 
   data () {
      return {
         
      }
   }
}
</script>


<style lang="less" rel="stylesheet/less">
#name {
   margin: 0 auto;
   padding: 0 24px;  
   &::after {
      content: "";
      clear: both;
      display: block;
      overflow: hidden;
   }
   .title {
      float: left;
      line-height: 60px;
      font-size: 30px;
      font-weight: 600;
      font-family: '楷体';
   }

   .nav {
      float: right;
      display: flex;
      box-sizing: border-box;
      .ivu-menu {
         width: 100%;
         .ivu-menu-item {
            padding: 0;
            .content {
               padding: 0 20px;
            }
         }
      }
   }
}

.module-container {
   width: 100%;
   margin-top: 30px;
   display: flex;
   box-sizing: border-box;
   // .form-container {
   //    flex: 0 0 240px;
   //    line-height: 35px;
   //    text-align: left;
   //    border-radius: 8px;
   //    .ivu-form-item-label {
   //       text-align: center;
   //    }
   //    .btn-part {
   //       display: flex;
   //       justify-content: space-around;
   //    }
   // }
   .search-res {
      width: 948px;
      flex: 1 1 auto;
      .btn-part {
         padding-bottom: 16px;
         text-align: right;
         .ivu-btn-primary {
            margin-left: 8px;
            padding: 0 36px;
         }
      }
      .search-table {
         width: 100%;
         .ivu-table {
            width: 100%;
         }
      }
      .ivu-table-body {
         max-height: 500px;
         overflow-y: auto;
         &::-webkit-scrollbar { width: 0 !important }
         -ms-overflow-style: none;
         overflow: -moz-scrollbars-none;
      }
   }
}

</style>