<template>
	<div class="syle">
		<div style="padding:15px 20px;background-color: #f7f9fb;">
			<div style="border: 1px solid #e6e9ee;    margin-bottom: 5px;
    height: 46px;
    border-bottom: 1px solid #eee;float: left;width:100% ">
				<div style="color: #2b71c8;
    border-bottom: 2px solid #2b71c8;width: 150px;
    height: 46px;
    line-height: 46px;
    padding: 8px 20px 10px 20px;font-size: 14px;float: left; ">
	<div style="margin-top: -10px;">
		<i class="fa fa-tv"></i> 培训学习统计
	</div>
					
				</div>
				<div style="font-size: 12px;
    float: right;
    padding: 4px;">

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

				</div>
			</div>
			<div class="table">
				<Table border :columns="columns1" :data="data1" ref="selection" size="small">
					<template slot-scope="{ row, index }" slot="action">
						<i class="fa fa-bar-chart-o" style="color: #2376e6"></i> <span style="font-size: 12px;
    color: #2376e6;">学院进度</span>
					</template>
				</Table>
			</div>
			<div style="margin: 20px 20px;
    text-align: left;
    padding-top: 8px;">
				共
				<span style="    font-style: normal;
    color: #ff8000;">1</span> 条记录 ， 每页显示
				<Select v-model="model1" style="width:50px">
					<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
				</Select>，跳转至：
				<Input v-model="value" style="width: 50px" />页
				<ButtonGroup>
					<Button>跳转</Button>
				</ButtonGroup>
				<!-- <Page :total="40" size="small" show-elevator show-sizer  show-total  /> -->
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				columns1: [{
						type: 'selection',
						width: 60,
						align: 'center'
					},
					{
						title: '课程名称',
						key: 'name',
						width: 315,
						align: 'center'
					},
					{
						title: '开始时间/结束时间',
						key: 'date',
						align: 'center'
					},
					{
						title: '参加方式',
						key: 'data1',
						width: 88,
						align: 'center'
					},
					{
						title: '完成条件',
						key: 'data2',
						width: 118,
						align: 'center'
					},
					{
						title: '参加人数	',
						key: 'data3',
						width: 88,
						align: 'center'
					},
					{
						title: '完成课程人数',
						key: 'data4',
						width: 110,
						align: 'center'
					},
					{
						title: '未完成人数',
						key: 'data5',
						width: 98,
						align: 'center'
					},
					{
						title: '课程通过率',
						key: 'data6',
						width: 98,
						align: 'center'
					},
					{
						title: '操作',
						slot: 'action',
						width: 110,
						align: 'center'
					}
				],
				data1: [{
						name: 'Redis',
						date: '2020-04-01 18:22 ~ 2020-05-01 18:22',
						data1: '安排学习',
						data2: '达到课程学时',
						data3: '2',
						data4: '0',
						data5: '2%',
						data6: '0%'
					}
				],
				cityList: [{
						value: "10",
						label: "10"
					},
					{
						value: "20",
						label: "20"
					},
					{
						value: "30",
						label: "30"
					},
					{
						value: "40",
						label: "40"
					},
					{
						value: "100",
						label: "100"
					},
					{
						value: "1000",
						label: "1000"
					}
				],
				model1: "10",
				value: "",
			}
		}
	}
</script>

<style scoped>
	.syle {

		background-color: #f7f9fb;
		min-height: 600px;
	}

	.top {
		display: inline-block;
		height: 35px;
		width: 100%;
		color: #fff;
		background: #2b71c8;
		border: 1px solid #e8e8e8;
		font-size: 12px;
		font-weight: 500;
		text-align: center;
		text-decoration: none;
		line-height: 35px;
	}

	.top1 {
		display: inline-block;
		height: 35px;
		width: 100%;
		color: #fff;
		background: #2b71c8;
		border: 1px solid #e8e8e8;
		font-size: 12px;
		font-weight: 500;
		text-align: center;
		text-decoration: none;
		line-height: 35px;
	}
</style>
