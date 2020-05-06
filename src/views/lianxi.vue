<template>
	<div style="background:#f7f9fb;">
		<div class="tabmenu" style="margin-left:20px;width:97%;">
			<a href="#" style="color:#2b71c8;border-bottom:2px solid #2b71c8;"><i class="fa fa-map"></i> 练习管理</a>
			<span style="font-size:12px;float:right;padding:6px;">
				<button type="button" class="btn btn-blue" style="font-size:13px;">&nbsp;&nbsp;<i class="fa fa-plus"></i> 创建练习
					&nbsp;&nbsp;&nbsp;</button>
			</span>
		</div>
		<div style="margin-left: 20px;width:97%;max-height: 235px;box-shadow: 0px 1px 2px #bbbbbb;">
			<div class="j-tabs courseTabs">
				<div class="list1">
					<a href="#" class="f-ib f-pa tab1 curr">进行中 (<span>0</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab2">未开始 (<span>0</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab3">已结束 (<span>1</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab4">全部 (<span>1</span>)</a>
				</div>
				<span style="float:right;color:#000;">
					<button type="button" class="btn btn-default" style="font-size:13px;height: 35px;float: left;border-radius: 0px;margin-top: 11.5px;margin-right:-1px;background:#f2f2f2"><i
						 class="fa fa-align-left"></i> 练习分类 <i class="fa fa-caret-down"></i></button>
					<input style="height:35px;border:#ccc 1px solid;padding:3px 5px;width:280px;margin-top: 11.5px;" type="text"
					 placeholder="输入名称查询..."><a href="#" style="right:20px;position:relative;border:none"><i class="fa fa-search"
						 style=" margin-top:12px;color:gray"></i></a>
				</span>
			</div>
			<div class="no-data data-border">
				没有练习记录，点击去&nbsp;<a style="font-size:16px;" href="#">创建练习</a>
				</div>
		</div>

	</div>
</template>

<script>

</script>

<style scoped>
	.tabmenu {
		margin-top: 20px;
		width: 100%;
		border: 1px solid #e6e9ee;
		background: #fff;
		margin-bottom: 5px;
		height: 46px;
		border-bottom: 1px solid #eee;
		color: #999;
	}

	.tabmenu a {
		color: #000;
		top: 1px;
		width: 150px;
		height: 46px;
		line-height: 46px;
		padding: 8px 25px 10px 25px;
		left: 150px;
		text-align: center;
		font-size: 14px;
	}

	.btn-blue {
		border-radius: 3px;
		color: #fff;
		border: 1px solid #2b71c8;
		cursor: pointer;
		background-color: #2b71c8;
	}

	.btn {
		display: inline-block;
		padding: 6px 22px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		user-select: none;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
	}

	.courseTabs {
		height: 56px;
		border-bottom: 1px solid #eee;
	}

	.courseTabs a {
		top: 1px;
		width: 150px;
		height: 55px;
		text-align: center;
		color: #333;
		font: 16px/55px 'Microsoft YaHei';
		border-right: 1px solid #eee;
		border-bottom: 1px solid #eee;
		margin-bottom: -1px;
	}

	.list1 {
		text-align: center;
		width: 150px;
		height: 55px;
		display: inline-block;
		border: 1px #eee solid;
	}

	.list1 span {
		color: red;
	}

	.btn-default {
		color: #333;
		background-color: #fff;
		border-color: #ccc;
	}

	.exam-title {
		color: #2972ab;
		font-weight: normal;
	}

	.u-centerCourse .tit {
		height: 30px;
		width: 100%;
	}

	.u-centerCourse {
		border-bottom: 1px dotted #e9e9e9;
		padding: 20px 25px 20px 20px;
		min-height: 120px;
	}

	.u-centerCourse .liclass {
		color: #999;
		font-size: 12px;
		line-height: 21px;
	}

	.liclass {
		color: #999;
		font-size: 12px;
		margin-left: 10px;

		line-height: 21px;
	}

	.linkbtn {
		margin-right: 8px;
		font-size: 13px;
		line-height: 15px;
	}
	.data-border {
	    margin-bottom: 20px;
	    border-bottom-left-radius: 3px;
	    border-bottom-right-radius: 3px;
	    background-color: #fff;
	}
	.no-data {
	    display: inline-block;
	    padding-top: 30px;
	    padding-bottom: 30px;
	    width: 100%;
	    font-size: 14px;
	    color: #555;
	    text-align: center;
	    background-color: #fff;
	    border-top-left-radius: 3px;
	    border-top-right-radius: 3px;
	    height: 200px;
	    line-height: 150px;
	}
</style>
