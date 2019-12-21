<template>
  <div class="administrator_result module-container">
    <div class="administrator_search form-container">
      <Form ref="formVisitor" :model="adInfo" :label-width="80">
        <FormItem label="姓名" prop="adName">
          <Input type="text" v-model="adInfo.visitorName" />
        </FormItem>
        <FormItem label="性别" prop="adSex">
          <Input type="text" v-model="adInfo.visitorID" />
        </FormItem>
        <FormItem label="身份证号" prop="adID">
          <Input type="text" v-model="adInfo.visitorDate" />
        </FormItem>
        <FormItem label="楼号" prop="manageBuilding">
          <Input type="text" v-model="adInfo.visitorBuilding" />
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
      <Table :columns="col" :data="dataList" />
    </div>
  </div>
</template>

<script>
export default {
  name: "administrator",
  data() {
    return {
      adInfo: {
        adName: "",
        adSex: "",
        adID: "",
        manageBuilding: ""
      },
      col: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "姓名",
          key: "adName",
          align: "center"
        },
        {
          title: "性别",
          key: "adSex",
          align: "center"
        },
        {
          title: "身份证号",
          key: "adID",
          align: "center"
        },
        {
          title: "楼号",
          key: "manageBuilding",
          align: "center"
        }
      ],
      dataList: [
        {
          adName: "fdafds",
          adSex: "女",
          adID: 134234123412345678,
          manageBuilding: 12
        }
      ]
    };
  },
  created() {
    if (this.bus.administrator) {
      this.list = this.bus.administrator;
    } else {
      //发送请求
    }
  },
  computed: {
    disable() {
      return true;
    }
  },
  methods: {
    handleSubmit(target) {
      let { adName, adSex, adID, building } = this.$data;
      let data = { adName, adSex, adID, building };

      if (adName && adName.length > 3) {
        alert("你这名字也忒长了，国外来的吧");
        return;
      }

      if (adSex && ["男", "女"].indexOf(adSex) == -1) {
        alert("好好填，不然我吐槽了");
        return;
      }

      if (adID && !/[1-9][0-9]{17}/g.test(adID)) {
        alert("不填拉倒，我找不费电的吗");
        return;
      }

      if (building && !/(?:[0-9])[1-9]/g.test(building)) {
        alert("这栋楼本宝宝找不到");
        return;
      }

      //发送请求
    }
  }
};
</script>


<style>
</style>