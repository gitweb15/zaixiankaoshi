<template>
  <div>
    <header1></header1>
    <div style="padding:15px 20px;background-color: #f7f9fb;">
      <div
        style="border: 1px solid #e6e9ee;    margin-bottom: 15px;
    height: 46px;
    border-bottom: 1px solid #eee;float: left;width:100% "
      >
        <div
          style="color: #2b71c8;
    border-bottom: 2px solid #2b71c8;width: 150px;
    height: 46px;
    line-height: 46px;
    padding: 8px 25px 10px 25px;font-size: 14px;float: left; "
        >
          <i class="fa fa-database"></i> 试题管理
        </div>
        <div style="font-size: 12px;
    float: right;
    padding: 4px;">
          <ButtonGroup>
            <Button @click="cx">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
              查询
            </Button>
          </ButtonGroup>&nbsp;
          <span style="color: #999;padding:10px">|</span>
          <ButtonGroup>
            <Button>
              <i class="fa fa-cloud-download" aria-hidden="true"></i>
              从云题库选择
            </Button>
          </ButtonGroup>
&nbsp;
          <ButtonGroup>
            <Button>
              <i class="fa fa-plus" aria-hidden="true"></i>
              新增试题
            </Button>
            <Button>
              <i class="fa fa-plus-square-o" aria-hidden="true"></i>
              快速新增
            </Button>
            <Button>
              <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
              批量导入
            </Button>
          </ButtonGroup>&nbsp;
          <ButtonGroup>
            <Button>
              <i class="fa fa-navicon" aria-hidden="true"></i>
              批量操作
              <span
                style="display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;"
              ></span>
            </Button>
          </ButtonGroup>&nbsp;
          <ButtonGroup>
            <Button>
              <i class="fa fa-cloud-download" aria-hidden="true"></i>
              导出
              <span
                style="display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;"
              ></span>
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <div class="zhongjian" v-show="show1">
        <div class="ys">
          关键字搜索
          <Input style="width: 360px" />
        </div>
        <div class="ys">
          试题类型
          <Select style="width: 360px">
            <Option value="单项"></Option>
            <Option value="单项"></Option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            <Option value="单项"></Option>
            <Option value="单项"></Option>
          </Select>
        </div>
        <div class="ys">
          难易度
          <Select style="width: 360px">
            <Option value="单项"></Option>
            <Option value="单项"></Option>
            <Option value="单项"></Option>
            <Option value="单项"></Option>
          </Select>
        </div>
        <div class="ys">
          创建时间
          <Row style=" display: inline-block;vertical-align: middle;">
            <Col span="12" style="padding:0 5px 0 0;">
              <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
            </Col>
            <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
          </Row>
        </div>
        <div class="ys">
          <Button  style="margin:0 5px 0 0;font-size:13px"><i class="fa fa-search" aria-hidden="true"></i>搜索</Button>
          <Button  style="margin:0 5px 0 0;font-size:13px"><i class="fa fa-refresh" aria-hidden="true"></i>重置</Button>
          </div>
      </div>

      <div class="table">
        <Table border :columns="columns12" :data="data6" ref="selection">
          <template slot-scope="{ row }" slot="classification">{{ row.classification }}</template>
          <template slot-scope="{ row, index }" slot="action">
            <i class="fa fa-edit" aria-hidden="true" @click="show(index)"></i>
            <i
              class="fa fa-trash-o"
              aria-hidden="true"
              style="margin-left:10px"
              @click="remove(index)"
            ></i>
          </template>
        </Table>
      </div>
      <div style="margin: 20px 20px;
    text-align: left;
    padding-top: 8px;">
        共
        <span style="    font-style: normal;
    color: #ff8000;">10</span> 条记录 ， 每页显示
        <Select v-model="model1" style="width:50px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>，跳转至：
        <Input v-model="value" style="width: 50px" />页
        <ButtonGroup>
          <Button>跳转</Button>
        </ButtonGroup>
        <!-- <Page :total="40" size="small" show-elevator show-sizer  show-total  /> -->
      </div>
    </div>
    <BackTop :height="70" :bottom="10" style="width: 40px;">
      <div class="top">帮助</div>
      <div class="top1">
        <Icon type="ios-arrow-up" style="padding: 0;" />
      </div>
    </BackTop>
  </div>
</template>
<script>
import header1 from "../components/header";
export default {
  data() {
    return {
      columns12: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "试题内容",
          key: "name"
        },
        {
          title: "题型",
          key: "age"
        },
        {
          title: "试题分类",
          slot: "classification",
          filters: [
            {
              label: "Joe",
              value: 1
            },
            {
              label: "John",
              value: 2
            }
          ]
        },
        {
          title: "试题难度",
          key: "address"
        },
        {
          title: "标准答案",
          key: "address"
        },
        {
          title: "分数",
          key: "address"
        },
        {
          title: "创建时间",
          key: "address"
        },
        {
          title: "云试题",
          key: "address"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data6: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          classification: "试题分类/Nginx"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          classification: "试题分类/Nginx"
        }
      ],
      cityList: [
        {
          value: "10",
          label: "10"
        },
        {
          value: "20",
          label: "20"
        },
        {
          value: "30",
          label: "30"
        },
        {
          value: "40",
          label: "40"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "1000",
          label: "1000"
        }
      ],
      model1: "20",
      value: "",
      show1:false
    };
  },
  components: {
    header1
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    },cx(){
this.show1=!this.show1
    }
  }
};
</script>
<style scoped>
.zhongjian {
  margin-bottom: 15px;
  padding: 15px 15px 15px 5px;
  border-radius: 3px;
  border: 1px solid #e6e9ee;
  background-color: #fff;
  text-align: left;
}
.top {
  display: inline-block;
  height: 35px;
  width: 100%;
  color: #fff;
  background: #2b71c8;
  border: 1px solid #e8e8e8;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  line-height: 35px;
}
.top1 {
  display: inline-block;
  height: 35px;
  width: 100%;
  color: #fff;
  background: #2b71c8;
  border: 1px solid #e8e8e8;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  line-height: 35px;
}
.ys {
  padding-right: 5px;
  font-size: 12px;
  height: 45px;
  line-height: 45px;
 
  font-weight: 500;
  color: #777;
  margin-left: 40px;
  display: inline-block;

}
</style>