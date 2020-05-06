<template>
	<div>
		<div class="main-box1">
			<div class="tabmenu">
				<a href="#" style="color:#2b71c8;border-bottom:2px solid #2b71c8;"><i class="fa fa-line-chart"></i>考试成绩</a>
				<span style="font-size:12px;float:right;padding:4px;">
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
				</span>
			</div>
			<table class="common-table table-border">
				<thead>
					<tr>
						<th width="2%" style="text-align:center"><input type="checkbox" group="chkArrangeID" class="checkboxCtrl"></th>
						<th style="width:10%">考试名称</th>
						<th style="width:6%">开始时间/结束时间</th>
						<th style="width:3%;text-align:center;">考试方式</th>
						<th style="width:3%;text-align:center;">参加人次</th>
						<th style="width:3%;text-align:center;">及格人次</th>
						<th style="width:2.5%;text-align:center;">及格率</th>
						<th style="width:2.5%;text-align:center;">正确率</th>
						<th style="width:2.5%;text-align:center;">得分率</th>
						<th style="width:2.5%;text-align:center;">平均分</th>
						<th style="width:2.5%;text-align:center;">最高分</th>
						<th style="width:2.5%;text-align:center;">最低分</th>
						<th style="width:3.5%;text-align:center;" class="rightborder">&nbsp;分析&nbsp;</th>
					</tr>
				</thead>
				
			</table>

			<div class="no-data" style="font-size: 13px;">无记录</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "Control",
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.main-box1 {
		float: left;
		padding: 15px 20px 20px 20px;
		width: 100%;
		min-height: 600px;
		background-color: #f7f9fb;

	}

	.tabmenu {
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
		font: 'Microsoft YaHei';
	}

	.btn {
		display: inline-block;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42857143;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background-image: none;
		border: 1px solid transparent;
		border-radius: 4px;
	}

	table {
		border-spacing: 0;
		border-collapse: collapse;
		display: table;
	}

	.common-table {
		width: 100%;
		border: 1px solid #e6e9ee;
		color: #222;
		font-size: 12px;
	}

	.table-border td,
	.table-border th {
		border-right: 1px solid #e6e9ee;
		border-bottom: 1px solid #e6e9ee;

	}

	.common-table th {
		padding: 7px 0 7px 5px;
		color: #555;
		line-height: 22px;
		text-align: left;
		word-wrap: break-word;
		background-color: #eff2f5;
	}

	.no-data {
		display: inline-block;
		padding-top: 30px;
		padding-bottom: 30px;
		width: 100%;
		font-size: 13px;
		color: #555;
		text-align: center;
		background-color: #fff;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		height: 200px;
		line-height: 120px;
	}
</style>
