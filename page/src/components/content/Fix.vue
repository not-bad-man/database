<template>
  <div class="fix_result module-container">
    <div class="fix_search form-container">
      <Form ref="formVisitor" :model="fixInfo" :label-width="80">
        <FormItem label="故障原因" prop="reason">
          <Input type="text" v-model="fixInfo.reason" />
        </FormItem>
        <FormItem label="保修日期" prop="date">
          <Input type="text" v-model="fixInfo.date" />
        </FormItem>
        <FormItem label="报修房间" prop="room">
          <Input type="text" v-model="fixInfo.room" placeholder="例如：1023" />
        </FormItem>
        <FormItem label="修理状态" prop="status">
          <Input type="text" v-model="fixInfo.status" placeholder="已修好/待修中" />
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
  name: "fix",
  data() {
    return {
      fixInfo: {
        reason: "",
        date: "",
        status: "",
        room: ""
      },
      col: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "故障原因",
          key: "reason",
          align: "center"
        },
        {
          title: "保修日期",
          key: "date",
          align: "center"
        },
        {
          title: "保修房间",
          key: "room",
          align: "center"
        },
        {
          title: "修理状态",
          key: "status",
          align: "center"
        }
      ],
      dataList: [
        {
          reason: "瓦特了",
          date: "2019-6-8",
          status: "待修中",
          room: 1111
        }
      ]
    };
  },
  created() {
    if (this.bus.fix) {
      this.list = this.bus.fix;
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
    handleSubmit(target) {
      let { rReason, rDate, rStatus, rRoom } = this.$data;

      // if ( rReason &&  )
      // console.log(rDate)
      // if (rStatus && rStatus)

      if (rRoom && !/^([1-3][1-2][1-5][1-6])$/g.test(rRoom)) {
        console.log("hello");
        alert("本宝宝找不到这间房");
        return;
      }

      //发送查询请求
    }
  }
};
</script>


<style>

</style>