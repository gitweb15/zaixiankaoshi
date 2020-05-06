<template>
	<div>
		<div class="left">
			<div class="top">
				管理设置
			</div>
			<div class="liMenu" @click="son(item,idx)" v-for="(item,idx) in menu" :key="idx" :class="idx==index?'son_active':'son'">
				<i :class="item.style1"></i>
				{{item.name}}
			</div>
		</div>
		<div class="right">
			<div class="main-box1">
				<div class="append-box">
					<h4>授权信息</h4>
					<fieldset>
						<div class="form-group">
							<label class="col-sm-2 control-label">当前版本：</label>
							<div class="col-sm-8" style="margin-left: 130px;vertical-align: middle;">
								<span class="box_text">免费版</span>
								<a href="#" style="margin-left: 10px; font-size: 12px; padding: 5px 8px; color: rgb(245, 124, 0);">升级付费版本</a>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<div class="form-group">
							<label class="col-sm-2 control-label">有效期至：</label>
							<div class="col-sm-8" style="margin-left: 130px;vertical-align: middle;">
								<span class="box_text">2050-12-31</span><a id="continue" class="text-green link m-l h5 v-m" href="../../cloud/payment/buyerconfirm.aspx?type=Continue"
								 style="font-size: 13px;color:#0094ff;margin-left:30px;display:none">续费</a>
							</div>
						</div>
					</fieldset>
					<fieldset>
						<div class="form-group">
							<label class="col-sm-2 control-label">授权考生账号数：</label>
							<div class="col-sm-8" style="margin-left: 90px;vertical-align: middle;">
								<span id="UserCount" class="box_text">25</span>（个）
							</div>
						</div>
					</fieldset>
				</div>
				<div class="append-box">
					<h4>Logo上传</h4>
					<fieldset>





						<div class="form-group">






							<div class="zuofudong fuck">
								<label class="col-sm-2 control-label">考生端Logo图片</label>
							</div>

							<div class="col-sm-8 zuofudong">
								<img src="http://cdn.kaoshiyun.com.cn/images/logo2.gif?t=Wed Apr 29 2020 11:35:30 GMT+0800 (中国标准时间)989" style="height: 40px; margin-bottom: 14px;">
								<span style="font-size: 12px;margin-left:20px;">建议尺寸48*48，大小不超过20KB</span>
								<br>
								<input id="btnFileUpload" type="file" name="image">
							</div>










							<span class="help-block youfudong">此功能仅对收费版本生效</span>
						</div>

						<div class="zhongduanheight">

							<div>
								<!-- 考试终端 -->
								<div class="zuofudong fuck">
									<label class="col-sm-2 control-label">考生端Logo图片</label>
								</div>

								<div class="zuofudong ">
									<span class="ceshisize">
										测试
									</span>
									<span class="xiugsisize">
										修改
									</span>
								</div>

								<!-- 权限管理 -->

								<div class="youfudong gongnsize">
									此功能仅对收费版本生效

								</div>
							</div>






						</div>
					</fieldset>
				</div>







				<!-- 账号信息 -->
				<div class="append-box" style="font-size: 12px;">
					<h4>账号信息</h4>
					<div>

						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								注册邮箱：
							</span>

							<span>
								521175582@qq.com
							</span>
						</p>

						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								企业名称：
							</span>

							<span>
								<span class="hainasize">
									海纳创新
								</span>
								<span class="xiugsisize">
									修改
								</span>
							</span>
						</p>

						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								手机号码：
							</span>

							<span>
								<span class="hainasize">
									18975019203
								</span>
								<span class="xiugsisize">
									修改
								</span>
							</span>
						</p>



						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								注册时间：
							</span>

							<span>
								2020-04-01 18:10:48
							</span>
						</p>

						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								AppID：
							</span>
						</p>


						<p class="zhuceyuxiang">
							<span class="youxiangsize">
								AppKey：
							</span>
						</p>

					</div>
				</div>









			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: [{
					name: '账号授权',
					style1: 'fa fa-diamond pdd'
				}, {
					name: '子管理员',
					style1: 'fa fa-wrench pdd'
				}, {
					name: '购买历史',
					style1: 'fa fa-cny pdd'
				}],
				index: 0
			}
		},
		methods: {
			son(item, idx) {
				this.index = idx;
			},
		}
	}
</script>

<style scoped>
	.hainasize {
		display: inline-block;
		width: 7%;
	}

	.youxiangsize {
		display: inline-block;
		width: 20%;
		font-size: 12px;
	}

	.zhuceyuxiang {
		line-height: 40px;
		padding-left: 20px;
	}

	.gongnsize {
		font-size: 12px;
	}

	.xiugsisize {
		font-size: 10px;
		color: #0000EE;
	}

	.ceshisize {
		display: inline-block;
		width: 100px;
		font-size: 20px;
	}

	.zhongduanheight {
		line-height: 100px;
	}

	.youfudong {
		font-size: 13px;
		float: right;
	}

	.fuck {
		width: 300px;
	}

	div {
		overflow: hidden;
	}

	.zuofudong {
		float: left;
	}

	img {
		vertical-align: middle;
		display: inline-block;
	}

	.left {
		width: 10%;
		border-right: 1px solid #d1d1d1;
		background-color: #eff2f5;
		height: 1000px;
		display: inline-block;
		vertical-align: top;
	}

	.top {
		font-weight: bold;
		font-size: 15px;
		height: 50px;
		line-height: 50px;
		color: #101F46;
		border-bottom: 1px solid #dfdfdf;
		padding: 0 20px;
		text-align: left;


	}

	.son {
		font-size: 14px;
		height: 50px;
		line-height: 50px;
		color: #101F46;
		border-bottom: 1px solid #dfdfdf;
		padding: 0 20px;
		text-align: left;
	}

	.son_active {
		font-size: 14px;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #dfdfdf;
		padding: 0 20px;
		text-align: left;
		color: #2b71c8;
		background-color: #f9f9f9;
		border-right: 3px solid #2b71c8;
	}

	.pdd {
		padding: 3px;
	}

	.right {
		width: 90%;
		display: inline-block;
	}

	.main-box1 {
		min-height: 396px;
		float: left;
		padding: 15px 20px 20px 20px;
		width: 100%;
		min-height: 600px;
		background-color: #f7f9fb;
	}

	.append-box {
		position: relative;
		float: left;
		width: 100%;
		margin-bottom: 15px;
		padding-top: 10px;
		padding-bottom: 20px;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		border: 1px solid #e6e9ee;
		background-color: #fff;
	}

	.append-box h4 {
		margin-top: -11px;
		margin-bottom: 10px;
		height: 40px;
		line-height: 40px;
		text-indent: 20px;
		font-size: 16px;
		color: #555;
		border-top: 1px solid #e6e9ee;
		background-color: #f9f9f9;
		font-weight: 500;
	}

	fieldset {
		min-width: 0;
		padding: 0;
		margin: 0;
		border: 0;
	}

	.append-box fieldset {
		margin-bottom: 10px;
		padding: 0 15px 10px 15px;
		border-bottom: 1px dashed #eee;
	}

	.append-box .control-label {
		padding-right: 5px;
		font-weight: 500;
		color: #777;
		padding-top: 7px;
	}

	.control-label {
		font-size: 13px;
	}

	.col-sm-2 {
		min-height: 1px;
		padding-right: 15px;
		padding-left: 15px;
		display: inline-block;

	}

	.col-sm-8 {
		display: inline-block;
		width: 66%;
	}

	.box_text {
		height: 30px;
		line-height: 30px;
		font-size: 14px;
	}

	.help-block {
		margin-left: 0px;
		display: inline-block;
		margin-top: 5px;
		margin-bottom: 10px;
		color: #737373;
		margin-top: -70px;
	}

	.file {
		position: relative;
		display: inline-block;
		background: #D0EEFF;
		border: 1px solid #99D3F5;
		border-radius: 4px;
		padding: 4px 12px;
		overflow: hidden;
		color: #1E88C7;
		text-decoration: none;
		text-indent: 0;
		line-height: 20px;
		font-size: 13px;
	}
</style>
