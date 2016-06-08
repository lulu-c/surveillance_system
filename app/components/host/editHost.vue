<template>
	<div class="container" style="text-align:center;">
	    <form class="form-horizontal">
		  <div class="form-group">
		    <label for="hostName" class="col-sm-2 control-label">主机名称</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="hostName" name="hostName" v-model="hostName">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="describe" class="col-sm-2 control-label">主机描述</label>
		     <div class="col-sm-10">
		      <textarea class="form-control" rows="3" name="describe" id="describe" v-model="describe"></textarea>
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="ip" class="col-sm-2 control-label">IP</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="ip" name="ip" v-model="ip">
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
<script>
export default {
        data(){
            return{
                	hostName: "机房1",
                	describe: "nice",
                	ip: "127.0.0.1"                
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