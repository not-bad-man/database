<template>
  <div class="department_result module-container">
    <div class="visitors_search form-container">
      <Form ref="departmentForm" :model="departmentInfo" :rules="ruleCustom" :label-width="80">
        <FormItem label="姓名" prop="visitorName">
          <Input type="text" v-model="departmentInfo.building" />
        </FormItem>
        <FormItem label="身份证号" prop="visitorID">
          <Input type="text" v-model="departmentInfo.direct" />
        </FormItem>
        <FormItem label="日期" prop="visitorDate">
          <Input type="text" v-model="departmentInfo.floor" />
        </FormItem>
        <FormItem label="楼号" prop="visitorBuilding">
          <Input type="text" v-model="departmentInfo.room" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('departmentForm')">search</Button>
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
  name: "department",
  data() {
    return {
      departmentInfo: {
        building: "",
        direct: "",
        floor: "",
        room: 1
      },
      col: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "楼号",
          key: "building",
          align: "center"
        },
        {
          title: "南/北楼",
          key: "direct",
          align: "center"
        },
        {
          title: "楼层",
          key: "floor",
          align: "center"
        },
        {
          title: "房号",
          key: "room",
          align: "center"
        }
      ],
      ruleCustom: {},
      dataList: [
        {
          building: 1,
          direct: "南",
          floor: 1,
          room: 6
        }
      ]
    };
  },
  created() {
    if (this.bus.department) {
      this.list = this.bus.department;
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
    submit() {
      let { building, direct, floor, room } = this.$data;

      if (building && !/^([1-9]+)$/g.test(building)) {
        alert("宝宝找不到这栋楼");
        return;
      }

      if (direct && ["南", "北"].indexOf(direct) == -1) {
        alert("要么是南边，要么是北边，别乱填");
        return;
      }

      if (floor && !/^([1-6]+)$/g.test(floor)) {
        alert("你确定这栋楼不在天上");
        return;
      }

      if (room && !/^([1-2][1-9])$/g.test(room)) {
        alert("这层压根没这间房，哥们");
        return;
      }

      //查询请求
    }
  }
};
</script>


<style>
</style>