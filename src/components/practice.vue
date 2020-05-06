<template>
	<div>
        <div class="main-box1">  
           <div class="tabmenu">
            <a href="#" class="active"><i class="fa fa-address-card-o"></i>  练习统计</a> 
            <span style="font-size:12px;float:right;padding:4px;">
                <button type="button" class="btn btn-default" onclick=""><i class="fa fa-angle-double-down" aria-hidden="true"></i>  查询</button>
                <button type="button" class="btn btn-default" onclick=""><i class="fa fa-download" aria-hidden="true"></i>  导出</button>
            </span>
        </div>
        <dl class="sievebar" style="display:none">
            <dt class="item">关键字搜索</dt>
            <dd class="con input">
                <input name="txtSearchField" type="text" id="txtSearchField" class="form-control"></dd>            
            <dt class="item">创建时间</dt>
            <dd class="con input">
                <input name="txtBeginTime" type="text" id="txtBeginTime" class="form-control icon-date width-48" autocomplete="off" style="">-<input name="txtEndTime" type="text" id="txtEndTime" class="form-control icon-date width-48" autocomplete="off" style=""></dd>
            
            <dt class="item"></dt>
            <dd class="con">
                <button id="btnSearch" class="btn btn-default" onclick=""><i class="fa fa-search" aria-hidden="true"></i>   查 询</button>
                <button class="btn btn-default" type="reset" onclick=""><i class="fa fa-refresh" aria-hidden="true"></i>   重 置</button>
            </dd>
        </dl>
            <Table border ref="selection" :columns="columns4" :data="data1" size="small">
                <a style="font-size:12px;color:#2376e6" href="" slot="name"><i class="fa fa-bar-chart-o"></i> 练习统计</a>
            </Table>
            <div class="pagination pages" style="width:100%;background:#fff;color:#73777a;font-size:13px;text-align:right;padding-right:4px;margin:0 auto;">            
            <input name="hidTotalCount" type="hidden" id="hidTotalCount" value="1">
            <input name="hidCurrentPageIndex" type="hidden" id="hidCurrentPageIndex" value="1">
            <input name="hidPageSize" type="hidden" id="hidPageSize" value="10">         
            <input name="hidChangePage" type="hidden" id="hidChangePage">    
            <div style="float:left;margin:20px 20px;text-align:right;padding-top:8px;">
                共<span id="lTotalCount" class="org">1</span>条记录 ， 
                每页显示 
                <select id="ddlPageSize" style="line-height:25px;min-height:25px;padding:2px 4px;border:1px solid #d9d9d9">
	                <option selected="selected" value="10">10</option>
	                <option value="20">20</option>
	                <option value="50"> 50 </option>
	                <option value="100"> 100 </option>
	                <option value="200"> 200 </option>
	                <option value="300"> 300 </option>
	                <option value="500"> 500 </option>
	                <option value="1000"> 1000 </option>
	                <option value="2000"> 2000 </option>
                </select>
                 ，跳转至：<input type="text" id="txtGoPage" style="line-height:20px;min-height:20px;padding:2px 4px;border:1px solid #d9d9d9;width:40px"> 页
                <button id="btnGoPage" type="button" class="btn btn-default" style="padding:2px 8px 3px 8px;" onclick="">跳转</button>
            </div>
            <div id="pager" class="pager clearfix" style=""><span class="current">1</span></div>
        </div>
        </div>
	</div>
</template>

<script>
export default {
	name: "practice",
    data(){
      return {
          columns4: [
            {
                type: 'selection',
                align: 'center',
                width: 60
                
            },
            {
                title: '练习名称',
                key: 'name1'
            },
            {
                title: '开始时间/结束时间',
                key: 'name2'
            },
            {
                title: '参与方式',
                key: 'name3'
            },
            {
                title: '练习类型',
                key: 'name4'
            },
            {
                title: '参加人数',
                key: 'name5'
            },
            {
                title: '练习次数',
                key: 'name6',
            },
            {
                title: '平均练习时长',
                key: 'name7',
                align: 'center',
            },
            {
                title: '得分率',
                key: 'name8',
                align: 'center',
            },
            {
                title: '正确率',
                key: 'name9',
                align: 'center',
              
            },
            {
                title: '错题率',
                key: 'name10',
                align: 'center',
              
            },
            {
                title: '操作',
                slot: 'name',
                width: 67,
                align: 'center'
            }
        ],
        data1: [
            {
                name1: '1、Redis介绍',
                name2: '2020-04-03 10:39 ~ 2020-04-10 10:39',
                name3: '安排考试',
                name4: '章节练习',
                name5: '1',
                name6: '1',
                name7: '0 分钟',
                name8: '0.00',
                name9: '33.00%',
                name10: '67.00%',
            },
           
        ]
      }
	},
	methods:{
         handleSelectAll (status) {
            this.$refs.selection.selectAll(status);
        }
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
        color: #428bca;
        text-decoration: none;
    }
    .btn-default {
        color: #333;
        background-color: #fff;
        border-color: #ccc;
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
        background-image: none;
        border: 1px solid #e6e9ee;
        border-radius: 4px;
        margin-left: 3px;
    }
    .pages {
        display: inline-block;
        width: 100%;
        color: #555;
        text-align: center;
    }

    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 20px 0;
        border-radius: 4px;
    }
    .pager span.current {
        background-color: #222a35;
        color: #fff;
        border-color: #ebebeb;
    }
    .pager a, .pager span {
        width: 45px;
        height: 40px;
        border: 1px solid #ebebeb;
        margin-left: -1px;
        color: #8a8a8a;
        display: inline-block;
        line-height: 40px;
        font-size: 15px;
        text-decoration: none;
        margin: 0 2px;
        border-radius: 6px;
        text-align: center;
        margin-top: 15px;
    }
    
</style>
