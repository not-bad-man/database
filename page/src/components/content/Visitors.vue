<template>
  <div class="visitors">
    <div class="visitors_search">
      <!-- 姓名：
      <input v-model="visitorName" type="text" />
      身份证号：
      <input v-model="visitorID" type="text" />
      <br />日期：
      <input v-model="visitorDate" type="date" />
      楼号：
      <input v-model="visitorBuilding" type="text" />-->
      <!-- <input type="submit" value="查询" @click="submit" /> -->
      <Form ref="formVisitor" :model="searchInfo" :rules="ruleCustom" :label-width="80">
        <FormItem label="姓名" prop="visitorName">
          <Input type="text" v-model="searchInfo.visitorName" />
        </FormItem>
        <FormItem label="身份证号" prop="visitorID">
          <Input type="text" v-model="searchInfo.visitorID" />
        </FormItem>
        <FormItem label="日期" prop="visitorDate">
          <Input type="text" v-model="searchInfo.visitorDate" />
        </FormItem>
        <FormItem label="楼号" prop="visitorBuilding">
          <Input type="text" v-model="searchInfo.visitorBuilding" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formVisitor')">search</Button>
        </FormItem>
      </Form>
    </div>
    <div class="search-res">
      <Table
        :columns="col"
        :data="dataList"
        @on-select="select"
        @on-select-all="select"
        @on-selection-change="select"
      ></Table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "visitors",
  data() {
    return {
      searchInfo: {
        visitorName: "",
        visitorID: "",
        visitorDate: "",
        visitorBuilding: ""
      },
      ruleCustom: {},
      col: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "姓名",
          key: "visitorName",
          align: "center"
        },
        {
          title: "身份证",
          key: "visitorID",
          align: "center"
        },
        {
          title: "日期",
          key: "visitorDate",
          align: "center"
        },
        {
          title: "楼号",
          key: "visitorBuilding",
          align: "center"
        }
      ],
      dataList: [
        {
          visitorName: "殷杰",
          visitorID: "123456789789456123",
          visitorDate: "2019-6-8",
          visitorBuilding: 3
        }
      ]
    };
  },
  created() {
    if (this.bus.visitors) {
      this.list = this.bus.visitors;
    } else {
      //发送请求，保存数据
    }
  },
  methods: {
    select(selection, row) {
      console.log(selection, row);
    },
    submit() {
      let { visitorName, visitorID, visitorDate, visitorBuilding } = this.$data;

      let data = {};

      if (visitorName && visitorName.length > 3) {
        alert("你这名字也忒长了，国外来的吧");
        return;
      } else {
        data.visitorName = visitorName;
      }

      if (visitorID && !/[1-9][0-9]{17}/g.test(visitorID)) {
        alert("不填拉倒，我找不费电的吗");
        return;
      } else {
        data.visitorID = visitorID;
      }

      if (visitorBuilding && !/(?:[0-9])[1-9]/g.test(visitorBuilding)) {
        alert("这栋楼本宝宝找不到");
        return;
      } else {
        data.visitorBuilding = visitorBuilding;
      }

      // if ( !visitorDate ) {
      //    alert('请填写日期');
      // }
      visitorDate && (data.visitorDate = visitorDate);
      //查找数据

      axios
        .put("/visitors", data)
        .then(res => {
          // this.list =
        })
        .catch(err => {});
    }
  }
};
</script>


<style lang="less" rel="stylesheet/less">
.visitors {
  width: 100%;
  margin-top: 30px;
  display: flex;
  box-sizing: border-box;
  .visitors_search {
    flex: 0 0 240px;
    padding: 20px 20px 20px 0;
    line-height: 35px;
    text-align: left;
    background: rgba(0, 0, 0, 0.2);
    .ivu-form-item-label {
      text-align: center;
    }
  }
  .search-res {
    flex: auto;
    margin-left: 24px;
  }
}
</style>