<template>
	<div style="background:#f7f9fb;">
		<div class="tabmenu" style="margin-left:20px;width:97%;">
			<a href="#" style="color:#2b71c8;border-bottom:2px solid #2b71c8;"><i class="fa fa-map-o"></i> 考试管理</a>
			<span style="font-size:12px;float:right;padding:6px;">
				<button type="button" class="btn btn-blue" style="font-size:13px;">&nbsp;&nbsp;<i class="fa fa-plus"></i> 创建考试
					&nbsp;&nbsp;&nbsp;</button>
			</span>
		</div>
		<div style="margin-left: 20px;width:97%;max-height: 235px;box-shadow: 0px 1px 2px #bbbbbb;">
			<div class="j-tabs courseTabs">
				<div class="list1">
					<a href="#" class="f-ib f-pa tab1 curr">进行中 (<span>1</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab2">未开始 (<span>0</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab3">已结束 (<span>1</span>)</a>
				</div>
				<div class="list1">
					<a href="#" class="f-ib f-pa tab4">全部 (<span>2</span>)</a>
				</div>
				<span style="float:right;color:#000;">
					<button type="button" class="btn btn-default" style="font-size:13px;height: 35px;float: left;border-radius: 0px;margin-top: 11.5px;margin-right:-1px;background:#f2f2f2"><i
						 class="fa fa-align-left"></i> 考试分类 <i class="fa fa-caret-down"></i></button>
					<input style="height:35px;border:#ccc 1px solid;padding:3px 5px;width:280px;margin-top: 11.5px;" type="text"
					 placeholder="输入名称查询..."><a href="#" style="right:20px;position:relative;border:none"><i class="fa fa-search"
						 style=" margin-top:12px;color:gray"></i></a>
				</span>
			</div>
			<div>
				<div class="u-centerCourse f-pr f-cb" id="trTemplateRow" style="padding-bottom: 24px; display: block; border-left: none;">
					<div class="f-fl f-pr courseImg" style="display: inline-block;">
						<img class="j-info img" style="width: 150px; height: 130px; margin-bottom: 30px; display: inline;" src="http://www.kaoshiyun.com.cn/a/55284b/55284b.png"
						 title="右键可复制二维码">
					</div>
					<div class="course" style="padding-top:8px;display: inline-block;" title="双击进入编辑页面">
						<div class="tit f-cb" style="position: relative;top: -25px;left: 10px;width: 330%;">
							<span class="courseTit f-fl f-thide" style="width:65%;" title="点击进入编辑页面"><a href="#" class="exam-title">Redis介绍<i
									 class="fa fa-pencil fa-pencil-editexam" style="margin-left: 8px; font-size: 11px; color: blue; display: none;"></i></a></span>
							<span class="courseTit f-fl f-thide" style="font-size:12px;color:gray;font-weight:normal;padding-left: 60%;" id="gradeScore">
								<font style="font-size:20px">0</font> <label style="font-weight:normal">&nbsp;&nbsp;人次已参加</label>
							</span>
							<div style="float:right;margin-right:10px;">
								<span class="btn-group">
									<button type="button" style="margin-left:3px;" class="btn btn-default dropdown-toggle linkbtn" data-toggle="dropdown"
									 aria-expanded="false">
										更多操作 <i class="fa fa-angle-double-down"></i>
									</button>
								</span>
							</div>
						</div>
						<div style="position: relative;top: -20px;">
							<div class="liclass f-ib f-fl j-info f-thide">试卷类型：<span id="paperType">固定试卷</span>
								&nbsp;&nbsp;&nbsp;&nbsp;参加方式：安排考试</div>
							<div class="liclass f-ib f-fl j-info f-thide">考试总分：100.00
								分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;及格分数：60.00
								分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;答题时间：60 分钟</div>
							<div class="liclass f-ib f-fl j-info f-thide">考试时间：<span id="validDate">2020-04-01 18:22 ~ 2020-05-01 18:22</span></div>
							<div class="liclass f-ib f-fl j-info f-thide">创建时间：<span id="createTime">2020-04-03 11:17:11</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
						</div>
						<div style="position: relative;right: -920px;top: -30px;">
							<a class="btn linkbtn" href="#" title="查看考生成绩"><i class="fa fa-line-chart"></i>
								查看成绩 (0)</a>
							<a class="btn linkbtn" href="#" title="考试参数及场景设置"><i class="fa fa-cog"></i>
								考试设置</a>
							<a class="btn linkbtn" href="#" title="复制考试"><i class="fa fa-copy"></i> 复制考试</a>
						</div>
					</div>
				</div>
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
</style>
