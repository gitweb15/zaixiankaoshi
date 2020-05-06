<template>
	<div>
		<div id="topControl" class="top topbannerbg shadow" style="position:fixed;top:0;">
			<!-- logo -->
			<div style="float:left;color:#fff;height:58px;display:table-cell;vertical-align:middle;font-size:20px;font-weight:bold;"><img
				 src="../assets/logo1.png" style="height:58px;padding:13px 30px 13px 10px;">
				<span style="margin-left:8px;"></span></div>
			<a id="dashboard" href="/" class="current">&nbsp;<i class="fa fa-home" style="line-height:58px;font-size:20px;"></i>&nbsp;</a>
			<a id="exam" href="../kaoshi">考试</a> <a id="exer" href="../lianxi">练习</a><a id="lesson" href="../peixun">培训</a>
			<a id="resource" href="#" class="">资源 <i class="fa fa-caret-down"></i></a><a id="report" href="../baobiao">报表</a>
			<a id="setting" href="#" title="快捷操作">&nbsp;<i class="fa fa-list-ul" style="font-size:18px;"></i></a>
			<span id="divRightPanel" style="float:right;">
				<a id="imguser" href="#" style="padding: 0px 8px;" class="topbannerbg">&nbsp;&nbsp;&nbsp;
					<i class="fa fa-user-circle" style="font-size:24px;"></i>&nbsp;&nbsp;&nbsp;</a> <a id="manage" href="../admin" style="padding:0px 8px;background:#051638">管理</a>
			</span>
		</div>
		<div style="height: 58px;">
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			// toKaoshi(){
			// 	this.$router.push("/kaoshi")
			// }
		}
	}
</script>

<style scoped>
	.top {
		width: 100%;
		height: 58px;
		margin: 0 auto;
		padding: 0px;
		position: fixed;
		z-index: 700;
	}

	.topbannerbg {
		background: #101F46;
	}

	img {
		vertical-align: middle;
		display: inline-block;
	}

	.top a {
		height: 58px;
		line-height: 58px;
		font-size: 16px;
		font-weight: 500;
		color: #fff;
		text-align: left;
		text-indent: 0px;
		float: left;
		margin: 0px;
		padding: 0 35px;
	}

	.top a:hover {
		background: #4B5564;
		color: #fff;
	}
</style>
