<template>
  <div class="student_result module-container">
    <div class="student_search form-container">
      <Form ref="studentForm" :model="studentInfo" :rules="ruleCustom" :label-width="80">
        <FormItem label="学号" prop="stuNumber">
          <Input placeholder="2016217712" autocomplete type="text" v-model="studentInfo.stuNumber" />
        </FormItem>
        <FormItem label="姓名" prop="stuName">
          <Input type="text" v-model="studentInfo.stuName" />
        </FormItem>
        <FormItem label="性别" prop="stuSex">
          <Input type="text" v-model="studentInfo.stuSex" />
        </FormItem>
        <FormItem label="年龄" prop="stuAge">
          <Input type="text" v-model="studentInfo.stuAge" />
        </FormItem>
        <FormItem label="身份证号" prop="stuID">
          <Input type="text" v-model="studentInfo.stuID" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('studentForm')">search</Button>
        </FormItem>
      </Form>
    </div>

    <div class="search-res">
      <div class="btn-part">
        <Button type="primary" :disabled="disable">删除</Button>
      </div>
      <Table :columns="col" :data="dataList" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { fetchData } from '../../utils/fetch'
import { operationType } from '../../utils/enum'
import qs from 'qs'

export default {
  name: "student",
  data() {
    return {
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
        },
        {
          stuNumber: 2016217710,
          stuName: "hehe",
          stuSex: "男",
          stuAge: 21,
          stuID: 123456465789,
          depar_no: 1111
        },
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
    disable() {
      return true;
    }
  },
  async created() {
    const data = await this.fetchData();
    console.log(data)
    // this.dataList = data;
  },
  
  methods: {
    async fetchData (data) {
      const message = JSON.stringify({
            studentInfo: data,
            operationType: type
          });

      const params = new URLSearchParams();
      params.append('studentInfo', data);
      params.append('operationType', type);
      
      const type = this.type;
      if (data) {
        return await fetchData({
          url: 'http://localhost:12345/student',
          method: 'get',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          params: params
        })
      } else {
        return await fetchData({
          url: 'http://localhost:12345/student',
          method: 'get'
        })
      }
    },
    async handleSubmit(target) {
      const form = this.$refs[target];
      let formData = {};
      this.type = operationType.query;
      if (!form) {
        this.$Message.error('发生错误，找不到表单')
      }
      
      form.validate(async (valid) => {
        formData = form.model;
        const data = await this.fetchData({...formData})
        
        this.dataList = data;
        this.$Message.info('开始查找')
      })

      // if (no && !/[1-9][0-9]{7}/g.test(no)) {
      //   alert("好好填学号，不然怎么查");
      //   return;
      // } else {
      //   data.no = no;
      // }

      // if (name && name.length > 3) {
      //   alert("你这名字也忒长了，国外来的吧");
      //   return;
      // } else {
      //   data.name = name;
      // }

      // if (sex && ["男", "女"].indexOf(sex) == -1) {
      //   alert("好好填，不然我吐槽了");
      //   return;
      // } else {
      //   data.sex = sex;
      // }

      // if (stuAge && !/[1-9][0-9]/g.test(stuAge)) {
      //   alert("别呀，你这填的啥年龄啊，恕臣妾不能帮你找");
      //   return;
      // } else if (parseInt(stuAge) < 15 || parseInt(stuAge) > 26) {
      //   alert("我觉得这个年龄不适合上大学");
      //   return;
      // } else {
      //   data.stuAge = stuAge;
      // }

      // if (stuID && !/[1-9][0-9]{17}/g.test(stuID)) {
      //   alert("不填拉倒，我找不费电的吗");
      //   return;
      // } else {
      //   data.stuID = stuID;
      // }

      //发送查找请求，并保存数据
      // console.log(this.no, this.name, this.sex, this.stuAge, this.stuID)
    }
  }
};
</script>


<style>
</style>