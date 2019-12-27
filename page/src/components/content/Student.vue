<template>
  <div class="student_result module-container">
    <div class="search-res">
      <div class="btn-part">
        <Button type="primary" @click="handleBtnClick(operationType.query)">搜索</Button>
        <Button type="primary" @click="handleBtnClick(operationType.insert)">添加</Button>          
        <Button type="primary"
          :disabled="addBtnStatus"
          @click="handleBtnClick(operationType.update)">修改</Button>
        <Button type="primary" 
          :disabled="deleteBtnStatus"
          @click="handleBtnClick(operationType.delete)"
        >删除</Button>
      </div>
      <Table 
        @on-selection-change="select"
        class="search-table" 
        :columns="col" 
        :data="dataList"/>
    </div>

    <div class="student_search form-container">
      <Modal
        v-model="modal"
        title="Title"
        :loading="loading"
        :mask-closable="false"
        @on-ok="handleSubmit">
        <Form ref="studentForm" :model="studentInfo" :rules="ruleCustom" :label-width="80">
          <FormItem label="学号" prop="">
            <Input placeholder="2016217712" autocomplete type="text" v-model="studentInfo.stuNumber" />
          </FormItem>
          <FormItem label="姓名" prop="stuName">
            <Input type="text" placeholder="添加时必填" v-model="studentInfo.stuName" />
          </FormItem>
          <FormItem label="性别" prop="stuSex">
            <Input type="text" placeholder="添加时必填" v-model="studentInfo.stuSex" />
          </FormItem>
          <FormItem label="年龄" prop="stuAge">
            <Input type="text" placeholder="添加时必填" v-model="studentInfo.stuAge" />
          </FormItem>
          <FormItem label="身份证号" prop="stuID">
            <Input type="text" placeholder="添加时必填" v-model="studentInfo.stuID" />
          </FormItem>
        </Form>
      </Modal>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { handleAxios } from '../../utils/fetch'
import { isEmpty, isFull, recoverObserver } from '../../utils/tools'
import { operationType, getAppTemplate } from '../../utils/enum'
// const student = getAppTemplate('student');
import qs from 'qs'

export default {
  name: "student",
  data() {
    return {
      operationType: operationType,
      loading: false,
      modal: false,
      selection: [],
      ruleCustom: {},
      type: operationType.query, 
      studentInfo: {
        stuNumber: "",
        stuName: "",
        stuSex: "",
        stuAge: "",
        stuID: ""
      },
      dataList: [
        {
          stuNumber: 2016217710,
          stuName: "hehe",
          stuSex: "男",
          stuAge: 21,
          stuID: 123456465789,
          depar_no: 1111
        }
      ],
      col: [
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
    };
  },
  computed: {
    deleteBtnStatus() {
      return !this.selection.length;
    },
    addBtnStatus() {
      return this.selection.length !== 1;
    }
  },
  async created() {
    const data = await this.fetchData();
    const pageType = this.bus.pageType;
    console.log(data)
    this.dataList = data;
  },
  
  methods: {
    async fetchData (data) {
      const params = new URLSearchParams();
      params.append('studentInfo', data);
      params.append('operationType', type);
      
      const type = this.type;
      if (data) {
        return await handleAxios({
          url: 'http://localhost:12345/student',
          method: 'post',
          data: {
            studentInfo: data,
            operationType: type
          }
        })
      } else {
        return await handleAxios({
          url: 'http://localhost:12345/student',
          method: 'get'
        })
      }
    },
    handleBtnClick (type) {
      this.modal = true;
      switch(type) {
        case operationType.query: {
          this.handleQuery('studentForm')
        }
        case operationType.insert: {
          this.handleAdd('studentForm')
        }
        case operationType.update: {
          this.handleUpdate();
        }
        case operationType.delete: {
          this.handleDelete('studentForm');
        }
      }
    },
    async handleAdd (target) {
      const form = this.$refs[target];
      let formData = {};
      this.type = operationType.query;
      if (!form) {
        this.$Message.error('发生错误，找不到表单');
        return false;
      }

      form.validate(async (valid) => {
        const info = {
          stuNumber: 2016217838,
          stuName: '诸葛老贼',
          stuSex: '男',
          stuAge: '21',
          stuID: '341124199612185317',
          depar_no: 3211
        }
        formData = isEmpty(form.model) ? info : form.model;
        formData = info;

        if (!isFull(formData)) {
          this.$Message.warning('请输入完整信息');
          return false;
        }

        try {
          const response = await fetchData({
            url: 'http://localhost:12345/student',
            method: 'post',
            data: {
              operationType: 'insert',
              studentInfo: formData
            }
          })
          this.$Message.success(response.mes);
          this.fetchData();
        } catch (error) {
          this.$Message.error('添加失败');
        }
      })
    },

    async handleQuery(target) {
      const form = this.$refs[target];
      let formData = {};
      this.type = operationType.query;
      if (!form) {
        this.$Message.error('发生错误，找不到表单');
        return false;
      }
      
      form.validate(async (valid) => {
        formData = form.model;
        if (isEmpty(formData)) {
          this.$Message.warning('不能填写空');
          return false;
        }
        const data = await this.fetchData({...formData})
        if (data.length > 0) {
          this.dataList = data;
          this.fetchData();
        } else {
          this.$Message.error('找不到相关信息')
        }
      })
    },

    async handleDelete() {
      const deleteArr = recoverObserver(this.selection);
      await handleAxios({
        url: 'http://localhost:12345/student',
        method: 'post',
        data: {
          studentInfo: deleteArr,
          operationType: 'delete'
        }
      })
    },
    async handleUpdate() {
      console.log('update')
    },

    handleSubmit () {

    },

    select (selection) {
      this.selection = selection;
      console.log(selection)
    },
    // selectCancel (selection, row) {
    //   this.selection = selection;
    //   console.log(selection, row)
    // },
    // selectAll (selection) {
    //   this.selection = selection;
    // }
  }
};
</script>


<style>
</style>