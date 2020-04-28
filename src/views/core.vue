<template>
    <div>
        <header1></header1>
        <div style="    padding: 10px 20px 40px;">
             <div style="    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #d1d6da;text-align:left;">
        <span style="color: #2b71c8;padding: 10px 40px;width: 180px;text-align: center;
    height: 50px;
    border-bottom: 2px solid #2b71c8;
    text-decoration: none;font-size: 16px;border-right: 1px solid #E8E8E8;"><i class="fa fa-share-alt"></i>
            考生中心
            </span>
        </div>
<div style="    border-bottom: 1px dashed #e5e5e5;
    padding: 20px 35px 20px 135px;
    font-size: 14px;">
    <div style="text-align: left;    color: #f57c00;    font-size: 13px;"><i class="fa fa-bell-o" aria-hidden="true"></i>
 如果您有给考生创建账号和密码，可以将下方考生中心地址或二维码发给考生，考生登录后可看到安排给自己的考试、学习、课程等</div><br/>
<div style="text-align: left;   font-size: 14px;"><span style="color: #808080;"> 考生中心登录地址：</span><span style="color: #5e5e5e;"> http://www.kaoshiyun.com.cn/u.html?id=40037003700350039003a003b</span>
    <span style="    color: #0094ff;
    margin-left: 20px;">
    复制</span><span style="    color: #0094ff;
    margin-left: 20px;">
    打开</span>
    </div>

</div>

<div style=" border-bottom: 1px dashed #e5e5e5;text-align: left;
    padding: 20px 35px 20px 135px;"><span style="vertical-align: top;">
考生中心登录二维码：</span><img src="http://www.kaoshiyun.com.cn/File/331567/logo/login331567.png" style="    width: 150px;
    height: 130px;
    margin-bottom: 30px;"/>
</div>


<div style="border-bottom: 1px dashed #e5e5e5;text-align: left; padding: 20px 35px 20px 23px;">
<span style="color: #808080;">  第三方集成(公众号、钉钉等)：</span><span style="color: #5e5e5e;">  http://www.kaoshiyun.com.cn/u.html?id=7003a003a0038003c003d003e</span>
  <span style="    color: #0094ff;
    margin-left: 20px;">
    复制</span><span style="    color: #0094ff;
    margin-left: 20px;">
    打开</span><span style="    color: #0094ff;margin-left: 20px;">
查看效果</span><span style="    color: #f57c00;font-size: 11px;margin-left: 40px;">
可以将此链接添加到公众号菜单</span>
</div>


</div><BackTop :height="70" :bottom="10" style="width: 40px;">
        <div class="top">帮助</div>
        <div class="top1"><Icon type="ios-arrow-up" style="padding: 0;" /></div>
    </BackTop>

    </div>
</template>

<script>
import header1 from "../components/header";
export default {
    data(){
        return{

        }
    },components: {
    header1
  }
}
</script>

<style scoped>
.top{
    display: inline-block;
    height: 35px;
    width: 100%;
    color: #fff;
    background: #2b71c8;
    border: 1px solid #E8E8E8;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    line-height: 35px;
}
.top1{
    display: inline-block;
    height: 35px;
    width: 100%;
    color: #fff;
    background: #2b71c8;
    border: 1px solid #E8E8E8;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    line-height: 35px;
    
}
</style>