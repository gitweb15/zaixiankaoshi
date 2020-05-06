<template>
	<div>
        <div class="main-box1">  
           <div class="tabmenu">
            <a href="#" style="color:#2b71c8;border-bottom:2px solid #2b71c8;"><i class="fa fa-cny"></i>  购买历史 (<label  style="font-size:13px;color:red">0</label>)</a> 
            <span style="font-size:12px;float:right;padding:4px;">
                <button type="button" class="btn btn-default"><i class="fa fa-angle-double-down" aria-hidden="true"></i>  查询</button>
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
                <button id="btnSearch" class="btn btn-default" ><i class="fa fa-search" aria-hidden="true"></i>   查 询</button>
                <button class="btn btn-default" type="reset"><i class="fa fa-refresh" aria-hidden="true"></i>   重 置</button>
            </dd>
        </dl>
        <table class="common-table table-border">
            <thead>
                <tr>
                    <th width="2%" style="text-align:center"><input type="checkbox" group="chkOrderNo" class="checkboxCtrl"></th>
                    <th width="6%">编号</th>    
                    <th width="5%">类型</th>  
                    <th width="6%">购买版本</th>
                    <th width="4%">购买时长(月)</th>   
                    <th width="3%">账号数</th>        
                    <th width="3%">在线人数</th>
                    <th width="6%">付款方式</th>   
                    <th width="4%" style="text-align:right">金额(￥)&nbsp;</th>       
                    <th width="7%">发票信息</th>  
                    <th width="7%">购买时间</th>  
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
        <div class="pages">
            <div class="pagination">
                <span class="num">共有&nbsp;<span id="lTotalCount" class="org">0</span>&nbsp;条记录 &nbsp; </span>
                <a class="current pagingleft prev" >前100条 </a>                
                <a class="current pagingleft prev" >前200条 </a>
                <a class="current pagingleft prev" >前300条 </a>
                <a class="current pagingleft prev" >前500条 </a>
                <a class="current pagingleft prev" >前1000条 </a>
                <a class="current pagingleft prev" style="display:none">显示全部记录 </a>
            </div>
        </div>
        <div class="no-data data-border" style="display: none;">没有记录</div>
        </div>
	
	</div>
</template>

<script>
export default {
	name: "Control",
    data(){
      return {
	
      }
	},
	methods:{
	
	}
}
</script>

<style scoped>
	.main-box1 {
        float: left;
        padding: 15px 20px 20px 50px;
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
        width: 150px;
        height: 46px;
        line-height: 46px;
        padding: 8px 25px 10px 25px;
        left: 150px;
        text-align: center;
        font-size: 14px;
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
   
    .table-border td, .table-border th {
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
    .num{
        font-size: 12px;
        color: #555555;
    }
    .pages a {
        color: #333;
    }
    .pages a:hover {
        color: #007dce;
        border-color: #007dce;
        text-decoration: none;
    }
    .pages .pagingleft, .pages .paginglink, .pages .pagingright {
        display: inline-block;
        margin-right: 5px;
        padding: 0 5px;
        min-width: 30px;
        height: 30px;
        line-height: 30px;
        font-family: tahoma;
        color: #333;
        text-align: center;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
        background-color: #fff;
    }
    
   
</style>
