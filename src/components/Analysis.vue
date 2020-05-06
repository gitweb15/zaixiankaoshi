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
          <i class="fa fa-bar-chart-o"></i>  考生分析
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
    padding-top: 8px;">
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
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '账号',
                        key: 'age'
                    },
                    {
                        title: '所属部门',			
                        key: 'address'
                    },{ title: '考试',
                        align: 'center',
                        children: [
                                    {
                                        title: '参加数',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '通过数',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '通过率',
                                        key: 'street',
                                        align: 'center',
                                       
                                    }]},{ title: '练习',
                        align: 'center',
                        children: [
                                    {
                                        title: '参加数',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '练习时长',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '正确率',
                                        key: 'street',
                                        align: 'center',
                                       
                                    }]},{ title: '培训',
                        align: 'center',
                        children: [
                                    {
                                        title: '参加数',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '完成数',
                                        key: 'street',
                                        align: 'center',
                                        
                                    },{
                                        title: '完成率',
                                        key: 'street',
                                        align: 'center',
                                       
                                    }]},{
                        title: '所得积分',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                     width:120,
                        align: 'center'
                    }
                ],
                data6: [
                    {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          classification: "试题分类/Nginx",street:10
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          classification: "试题分类/Nginx",street:10
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