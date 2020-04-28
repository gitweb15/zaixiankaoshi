<template>
  <div>
    <div style="width:524px; margin: 0 auto;">
      
        <div style="padding: 40px 25px;">
          <img
            src="http://www.kaoshiyun.com.cn/Index/style/images/logo2.jpg"
            width="35px"
       
          />
          <span style="font-size:28px;color: #2C3EA7;font-family: 'Microsoft JhengHei UI';">考试云</span>
        </div>
        <div style="border: 1px solid #eee;">
            <div style="padding: 9px 20px 0;border-bottom: 1px solid #eee;" class="clearfix">
                <div style="height: 45px;font-size: 20px;color: #666;
    line-height: 45px;
    padding: 0 20px; float: left;">注册</div><div style="    color: #1C87D5;    float: right; line-height: 45px;font-size: 13px;">我有账号，去登录</div>
            </div>
            <div style="    padding: 30px;">
               
                <div>  
                    <Input prefix="md-mail" placeholder="请输入注册邮箱，用于账号登录" style="width: 100%;" size="large" :v-model="mailbox"  />
                </div>
                <div class="gd"></div>
                <div>
                    <Input prefix="ios-key" placeholder="请输入至少8个字符登录密码" style="width: 100%;" size="large" :v-model="key" />
                </div>
                 <div class="gd">{{key}}</div>
                  <div>
                      <Input prefix="ios-contact" placeholder="请输入企业名称（注考生请勿在此注册）" style="width: 100%;" size="large" :v-model="enterprise" />
                </div>
                 <div class="gd">{{enterprise}}</div>
                  <div>
                      <Input prefix="ios-contact" placeholder="请输入手机号码" style="width: 100%;" size="large" :v-model="number" />
                </div>
                 <div class="gd">{{number}}</div>
                  <div>
<Input prefix="ios-contact" placeholder="说说你的需求，以便为您提供更多资源" style="width: 100%;" size="large" :v-model="proposal" />
                </div>
                 <div class="gd">{{proposal}}</div>

                 <div style="height:40px;background-color: #58B9E6;color: white;font-size: 14px;line-height: 40px;">注册</div>
                 <div style="color:#339ADD;font-size: 12px;text-align: left;padding: 30px 0;">《考试云使用条款与隐私保护》</div>
                 <div style="color:#c2c2c2;text-align: center;font-size: 12px;">Copyright © 2019 考试云</div>
            </div>
         </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
mailbox:'',
key:'',
enterprise:'',
number:'',
proposal:'',
    };
  }, 
  
  methods:{
      
  }
};
</script>
<style scoped>
.gd{
    height: 30px;line-height: 30px;text-align: left;
}
.border_red{
border: 1px solid red;
}
.color_red{
color: red;
}
.clearfix:after {

display: block;

visibility: hidden;

clear: both;

height: 0;

content:".";

}

.clearfix {zoom: 1;}



</style>

</style>