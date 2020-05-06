<template>
	<div>
		<div class="left">
			<div class="top">
				统计报表
			</div>
			<div class="liMenu" @click="son(item,idx,item.path)" v-for="(item,idx) in menu" :key="idx" :class="idx==index?'son_active':'son'">
				<i :class="item.style1"></i>
				{{item.name}}
			</div>
			
		</div>
		<div class="right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: [{
					name: '考试成绩',
					style1: 'fa fa-line-chart pdd',
					path:'/Report/'
				}, {
					name: '考生分析',
					style1: 'fa fa-bar-chart-o pdd',
					path:'/Report/Analysis'
				}, {
					name: '答题统计',
					style1: 'fa fa-pie-chart pdd',
					path:'/Report/'
				}, {
					name: '缺席统计',
					style1: 'fa fa-user-times pdd',
					path:'/Report/'
				}, {
					name: '人工评卷',
					style1: 'fa fa-balance-scale pdd',
					path:'/Report/judgepaper/'
				}, {
					name: '练习统计',
					style1: 'fa fa-address-card-o pdd',
					path:'/Report/'
				}, {
					name: '培训学习统计',
					style1: 'fa fa-tv pdd',
					path:'/Report/'
				}, {
					name: '积分统计',
					style1: 'fa fa-sort-amount-desc pdd',
					path:'/Report/IntegralAnalysis'
				}, {
					name: '试题分析',
					style1: 'fa fa-area-chart pdd',
					path:'/Report/'
				}, {
					name: '试题类型统计',
					style1: 'fa fa-quora pdd',
					path:'/Report/'
				}],
				index: 0
			}
		},
		methods: {
			son(item,idx,add){
			          this.index=idx;
			          this.$router.push(add)
			      }
		}
	}
</script>

<style scoped>
	.left {
		width: 10%;
		border-right: 1px solid #d1d1d1;
		background-color: #eff2f5;
		min-height: 663px;
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
</style>
