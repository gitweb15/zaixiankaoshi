<template>
	<div style="background: #f0f0f0;height: 100%;max-height: 800px;overflow: hidden;">
		<div style="padding: 20px;">
			<div class="left1">
				<div class="page_head">
					<div class="edition_box" style="overflow:hidden">
						<a class="label rounded" style="background:#1C87D5" href="#">免费版</a>
						<span class="link m-l v-m" style="color: #808080">有效期至:<span style="margin-left:4px; margin-left: 4px;font-style:italic">2050-12-31</span></span>
						<span style="color:#e0e0e0;margin-left:10px;">|</span>
						<span class="link m-l v-m" style="color: #808080;">专属顾问：<a><i class="fa fa-phone"></i>&nbsp;18573103286</a>
							<a href="#" style="margin-left: 13px;"><i class="fa fa-qq"></i>&nbsp;240349944</a>
							<a href="#" style="margin-left: 13px;"><i class="fa fa-wechat"></i></a></span>
					</div>
				</div>
				<div class="left11">
					<span class="title">升级到付费版本，享受更多功能</span>
					<a href="#" style="font-size: 12px; padding: 5px 8px; background: rgb(67, 160, 71); color: rgb(255, 255, 255); border-radius: 3px;margin-left: 18px;">立即升级</a>
					<div class="product-intro">
						<div class="row l-h p-t-sm">
							<div><i class="fa fa-bookmark-o m-r-sm Exam"></i><span style="margin-right: 150px;" class="text-grey">更多在线人数、账号数</span><i
								 class="fa fa-bookmark-o m-r-sm Exam"></i><span class="text-grey">考试加速服务，支持高速并发</span></div>
						</div>
						<div class="row l-h m-t-md">
							<div><i class="fa fa-bookmark-o m-r-sm Exam"></i><span style="margin-right: 120px;" class="text-grey">自定义LOGO,凸显企业形象</span><i
								 class="fa fa-bookmark-o m-r-sm Exam"></i><span class="text-grey">报表分析及归档</span></div>
						</div>
						<div class="row l-h m-t-md">
							<div><i class="fa fa-bookmark-o m-r-sm Exam"></i><span style="margin-right: 136px;" class="text-grey">复制考试、手工签名考试</span><i
								 class="fa fa-bookmark-o m-r-sm Exam"></i><span class="text-grey">在线支持、问题解答</span></div>
						</div>
					</div>
					<div class="title" style="margin: 24px 0 16px;">当前版本使用情况</div>
					<img src="../assets/ce.png" width="600px" />
				</div>
			</div>
			<div class="right1">
				<img src="../assets/cjkaoshi.png" style="width: 210px;height: 160px;margin-left: 3%;margin-top: 25px;cursor: pointer;" />
				<img src="../assets/cjlianxi.png" style="width: 210px;height: 160px;margin-left: 3%;margin-top: 25px;cursor: pointer;" />
				<img src="../assets/cjkecheng.png" style="width: 210px;height: 160px;margin-left: 3%;margin-top: 25px;cursor: pointer;" />
			</div>
			<div class="right2">
				选择行业，为您提供更多相关资源
				<div style="margin-top: 16px;">
					<div class="industry-modal"><span>医疗/护理/美容</span><i class="fa"></i></div>
					<div class="industry-modal"><span>建筑行业</span><i class="fa"></i></div>
					<div class="industry-modal"><span>教育/培训</span><i class="fa"></i></div>
					<div class="industry-modal"><span>保险/金融</span><i class="fa"></i></div>
					<div class="industry-modal"><span>通信电信</span><i class="fa"></i></div>
					<div class="industry-modal"><span>贸易/批发/零售</span><i class="fa"></i></div>
					<div class="industry-modal"><span>生产/机械制造</span><i class="fa"></i></div>
					<div class="industry-modal"><span>餐饮/娱乐/生活服务</span><i class="fa"></i></div>
					<div class="industry-modal"><span>物流/配送/运输</span><i class="fa"></i></div>
					<div class="industry-modal"><span>物业/维保/设备</span><i class="fa"></i></div>
					<div class="industry-modal"><span>能源/环保</span><i class="fa"></i></div>
					<div class="industry-modal"><span>其他行业</span><i class="fa"></i></div>
				</div>
				
			</div>
			<div class="left2">
					<h3><i class="fa fa-line-chart"></i>&nbsp;考试量</h3>
					<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
						<div class="tit">最近一个月参加量</div>
						<h1><em style="color: #2b71c8;font-weight: 500;">1</em><span class="tongji-time-style">人次</span></h1>
					</div>
					<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
						<div class="tit">最近一周参加量</div>
						<h1><em style="color: #2b71c8;font-weight: 500;">0</em><span class="tongji-time-style">人次</span></h1>
					</div>
					<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
						<div class="tit">昨日参加量</div>
						<h1><em style="color: #2b71c8;font-weight: 500;">0</em><span class="tongji-time-style">人次</span></h1>
					</div>
			</div>
			<div class="right3">
				<h3><i class="fa fa-line-chart"></i>&nbsp;资源</h3>
				<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
					<div class="tit">实时在线答题人数</div>
					<h1><em style="color: #f57c00;font-weight: 500;">0</em><span class="tongji-time-style">人</span></h1>
				</div>
				<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
					<div class="tit">试题</div>
					<h1><em style="color: #2b71c8;font-weight: 500;">10</em><span class="tongji-time-style">道试题</span></h1>
				</div>
				<div style="display: inline-block;margin-top: 40px;padding: 0 70px;text-align: center;">
					<div class="tit">考试</div>
					<h1><em style="color: #2b71c8;font-weight: 500;">3</em><span class="tongji-time-style">场考试</span></h1>
				</div>
			</div>

		</div>

	</div>
</template>
<script>
	
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	img {
		vertical-align: middle;
		display: inline-block;
	}

	.left1 {
		float: left;
		font-size: 14px;
		height: 440px;
		width: 727px;
		background-color: #fff;
		border: 1px solid #e4e4e4;
		margin-bottom: 20px;
	}

	.page_head {
		height: 78px;
		line-height: 78px;
		background: #fff;
		box-sizing: content-box;
		margin: 0 24px;
		border-bottom: 1px solid #e4e4e4;
		overflow: hidden;
	}

	.edition_box {
		display: inline-block;
	}

	.edition_box .label {
		font-size: 14px;
		font-weight: 400;
		padding: 10px 16px;
		line-height: 14px;
		display: inline-block;
		color: #ECF8F0;
		vertical-align: middle;
	}

	.circle,
	.rounded {
		border-radius: 500px;
	}

	.m-l,
	.m-x {
		margin-left: 1rem !important;
	}

	.left11 {
		padding: 24px 24px 48px;
	}

	.title {
		font-weight: 600;
		font-size: 14px;
		margin-bottom: 24px;
	}

	.product-intro {
		height: 150px;
		border-bottom: 1px solid #e4e4e4;
	}

	.product-intro .fa {
		font-size: 18px;
	}

	.col-md-5 {
		width: 43%;

	}

	.text-grey {
		color: #999;
		margin-left: 8px;
	}

	.row {
		margin-top: 1.5em;
	}

	.right1 {
		float: right;
		height: 218px;
		width: 727px;
		background-color: #fff;
		margin-bottom: 24px;
		border: 1px solid #e4e4e4;
	}

	.right2 {
		float: right;
		height: 196px;
		width: 727px;
		background-color: #fff;
		border: 1px solid #e4e4e4;
		padding: 1rem;
	}
	.industry-modal {
		float: left;
	    box-sizing: border-box;
	    position: relative;
	    cursor: pointer;
	    background: #fff;
	    height: 32px;
	    line-height: 32px;
	    border-radius: 4px;
	    text-align: center;
	    border: 1px solid #ddd;
		width: 23%;
		margin: 5px;
	}

	.left2 {
		position: relative;
		clear: both;
		width: 727px;
		height: 216px;
		background-color: #fff;
		border: 1px solid #e4e4e4;
		padding: 1rem;
	}
	.tit{
		    margin-bottom: 22px;
		    font-size: 13px;
	}
.tongji-time-style {
    font-size: 18px;
    margin-left: 4px;
    position: relative;
    top: -1px;
    left: 1px;
}
	.right3 {
		position: relative;
		top: -215px;
		right: -751px;
		width: 727px;
		height: 216px;
		background-color: #fff;
		border: 1px solid #e4e4e4;
		padding: 1rem;
	}
</style>
