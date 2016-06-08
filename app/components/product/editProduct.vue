<template>
	<div class="container" style="text-align:center">
    <form class="form-horizontal">
  <div class="form-group">
    <label for="productName" class="col-sm-2 control-label">产品名称</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="productName" name="productName">
    </div>
  </div>
  <div class="form-group">
    <label for="describe" class="col-sm-2 control-label">产品描述</label>
     <div class="col-sm-10">
      <textarea class="form-control" rows="3" id="describe" name="describe"></textarea>
    </div>
  </div>
  <div class="form-group">
    <label class="control-label col-sm-2 control-label" for="addApplication">添加应用</label>
    <div class="controls col-sm-10">
      <select id="addApplication" class="form-control" name="addApplication">
        <option v-for="app in appList">{{app}}</option>
      </select>
    </div>
  </div>
   <div class="form-group">
    <label class="control-label col-sm-2 control-label" for="addService">添加服务</label>
    <div class="controls col-sm-10">
      <select id="addService" class="form-control" name="addService">
        <option v-for="server in serList">{{server}}</option>
      </select>
    </div>
  </div>
  <input type="submit" class="btn btn-success" value="保存"> 
  <input type="reset" class="btn btn-warning" value="取消"> 
  <input type="button" class="btn btn-info" value="返回" v-on:click="turnBack">
</form>
</div>
</template>
<style type="text/css">
 </style>
<script type="text/javascript">
	export default{
		data(){
			return {
        productName:'周边优惠',
        describe:'周边优惠',
				appList:['mysql1','mysql2','msql3'],
				serList:['server1','server2','server3']
			}
		},
    methods:{
            turnBack:function(){
              history.go(-1);
            }
        },
   events:{
      }
	}
</script>