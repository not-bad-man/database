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
   .form-container {
      flex: 0 0 240px;
      padding: 20px 20px 20px 0;
      line-height: 35px;
      text-align: left;
      border-radius: 8px;
      border: 2px dashed rgba(0,0,0,.2);
      .ivu-form-item-label {
         text-align: center;
      }
   }
   .search-res {
      flex: 1 1 auto;
      margin-left: 24px;
      .btn-part {
         padding-bottom: 16px;
         text-align: right;
      }
   }
}

</style>