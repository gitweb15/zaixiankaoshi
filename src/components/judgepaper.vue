<template>
    <div class="syle">
        <div style="padding:15px 20px;background-color: #f7f9fb;">
      <div
        style="border: 1px solid #e6e9ee;    margin-bottom: 5px;
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
          <i class="fa fa-balance-scale"></i>  人工评卷
        </div>
        <div style="font-size: 12px;
    float: right;
    padding: 4px;">
    
          <ButtonGroup style="padding: 0 4px 0 0;">
            <Button>
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
              查询
            </Button>
          </ButtonGroup>
     
            

            <ButtonGroup> 
            <Button>
              <i class="fa fa-download" aria-hidden="true"></i>
              导出
            </Button>
            
            
          </ButtonGroup> 
           
        </div>
      </div>
      <div class="table">
 <Table border :columns="columns12" :data="data6" ref="selection">
        <template  slot-scope="{ row }" slot="classification">
            {{ row.classification }}
        </template>
        <template slot-scope="{ row, index }" slot="action">
           <i class="fa fa-bar-chart-o" @click="show(index)"></i><span style="font-size: 12px;
    color: #2376e6;">考生分析</span>
           
            
        </template>
    </Table>
      </div>
      <div style="margin: 20px 20px;
    text-align: left;
    padding-top: 8px;" v-if="data6!=''">
        共
        <span style="    font-style: normal;
    color: #ff8000;">2</span> 条记录 ， 每页显示
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
export default {
    data(){
        return{
            columns12: [
        
                     {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '考试名称',
                        key: 'name'
                    },
                    {
                        title: '考试时间/结束时间',
                        key: 'age'
                    },{
                        title: '试卷类型',
                        key: 'age'
                    },{
                        title: '总分/及格分数',
                        key: 'age'
                    },{
                        title: '交卷数',
                        key: 'age'
                    },{
                        title: '未评卷数',
                        key: 'age'
                    },
                    {
                        title: '已评卷数',
                        key: 'age'
                    },
                
                    {
                        title: '操作',
                        slot: 'action',
                     width:120,
                        align: 'center'
                    }
                ],
                data6: [
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
      ], model1: "20",
      value: "",
        }
    }
}
</script>

<style scoped>
.syle{
        
        background-color: #f7f9fb;
       min-height: 600px;
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
</style>