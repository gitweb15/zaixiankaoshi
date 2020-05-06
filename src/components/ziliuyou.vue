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
          <i class="fa fa-wrench"></i>  考生管理  (<span style="color:red">0</span>)
        </div>
        <div style="font-size: 12px;
    float: right;
    padding: 4px;">
    子管理员剩余额度: <span style="color:red">0</span> 个
          <ButtonGroup>
            <Button>
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
              查询
            </Button>
          </ButtonGroup>
          <span style="color: #999;padding:10px">|</span>
            

            <ButtonGroup> 
            <Button>
              <i class="fa fa-user-plus" aria-hidden="true"></i>
              新增子管理
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
            <i class="fa fa-edit" aria-hidden="true"  @click="show(index)"></i>
            <i class="fa fa-trash-o" aria-hidden="true" style="margin-left:10px"  @click="remove(index)"></i>
            
        </template>
    </Table>
      </div>
     
    </div>
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
                        title: '账号',
                        key: 'name'
                    },
                    {
                        title: '姓名',
                        key: 'age'
                    },
                    {
                        title: '创建时间',			
                        key: 'address'
                    },{
                        title: '状态',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data6: [
                ]
        }
    }
}
</script>

<style scoped>
.syle{
        padding: 15px 20px;
        background-color: #f7f9fb;
       min-height: 600px;
}
</style>