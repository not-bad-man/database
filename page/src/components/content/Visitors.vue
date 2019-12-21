<template>
  <div class="visitors module-container">
    <div class="visitors_search form-container">
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
      <div class="btn-part">
        <Button type="primary" :disabled="disable">删除</Button>
      </div>
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
import { fetchData } from "../../utils/fetch";
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
  computed: {
    disable() {
      return true;
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

</style>