<template>
    <div>
         <header1></header1>
        <div class="left">
             <div class="top">
                 管理设置
             </div>
             <div class="liMenu" 
        :class="idx==index?'son_active':'son'" @click="son(item,idx,item.add)" v-for="(item,idx) in menu"                 
        :key="idx">
        <i :class="item.style1"></i>
        {{item.name}}
      </div>
            
        </div>
        <div class="right">
            <router-view/>
        </div>
    </div>
</template>

<script>
import header1 from "../components/header";

export default {
    data(){
        return{
menu:[{name:'账号授权',style1:'fa fa-diamond pdd',add:"/SubAdministrator/ziliuyou"},{name:'子管理员',style1:'fa fa-wrench pdd',add:"/SubAdministrator/ziliuyou"},{name:'购买历史',style1:'fa fa-cny pdd',add:"/SubAdministrator/ziliuyou"}],
            index:0

        }
    },methods:{
son(item,idx,add){
          this.index=idx;
          this.$router.push(add)
      }
    },
  components: {
    header1
  }
}
</script>

<style scoped>
.left{
    width: 10%;
    border-right: 1px solid #d1d1d1;
    background-color: #eff2f5;
    height: 1000px;
    display: inline-block;vertical-align: top;
}

.top{
    font-weight: bold;
    font-size: 15px;
    height: 50px;
    line-height: 50px;
    color: #101F46;
    border-bottom: 1px solid #dfdfdf;
    padding: 0 20px;
    text-align: left;
   
    
}
.son{
    font-size: 14px;
    height: 50px;
    line-height: 50px;
    color: #101F46;
    border-bottom: 1px solid #dfdfdf;padding: 0 20px;text-align: left;
}
.son_active{
     font-size: 14px;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dfdfdf;padding: 0 20px;text-align: left;
    color: #2b71c8;
    background-color: #f9f9f9;
    border-right: 3px solid #2b71c8;
}
.pdd{
    padding: 3px;
}
.right{
width: 90%;display: inline-block;
}
</style>