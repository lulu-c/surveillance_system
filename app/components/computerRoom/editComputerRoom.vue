<template>
	<div class="container" style="text-align:center;">
	    <form class="form-horizontal">
		    <div class="form-group">
		      <label for="roomName" class="col-sm-2 control-label">机房名称</label>
		      <div class="col-sm-10">
		        <input type="text" class="form-control" id="roomName" name="roomName" v-model="roomName">
		      </div>
		    </div>
		    <div class="form-group">
		      <label for="roomAddr" class="col-sm-2 control-label">zookeeper地址</label>
		      <div class="col-sm-10">
		        <input type="text" class="form-control" id="roomAddr" name="roomAddr" v-model="roomAddr">
		      </div>
		    </div>
		    <div class="form-group">
		      <label for="describe" class="col-sm-2 control-label">机房描述</label>
		      <div class="col-sm-10">
		        <textarea class="form-control" rows="3" name="describe" id="describe" v-model="describe"></textarea>
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
                	roomName: "机房1",
                	roomAddr: "127.0.0.1",
                	describe: "nice"
                
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