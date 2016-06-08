<template>
	<div class="container">
	    <form class="form-horizontal">
		  <div class="form-group">
		    <label for="appName" class="col-sm-2 control-label">应用名称</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="appName" name="appName" v-model="appName">
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="describe" class="col-sm-2 control-label">应用描述</label>
		     <div class="col-sm-10">
		      <textarea class="form-control" rows="3" name="describe" v-model="describe"></textarea>
		    </div>
		  </div>
		  <div class="form-group">
		    <label class="control-label col-sm-2 control-label" for="host">关联主机</label>
		    <div class="controls col-sm-10">
		      <select id="host" class="form-control" name="host">
		        <option v-for="host in hosts">{{host}}</option>		   
		      </select>
		    </div>
		  </div>
		  <div class="form-group">
		    <label for="port" class="col-sm-2 control-label">主机端口</label>
		    <div class="col-sm-10">
		      <input type="text" class="form-control" id="port" name="port" v-model="port">
		    </div>
		  </div>
		  <input type="submit" class="btn btn-success" value="保存"> 
		  <input type="reset" class="btn btn-warning" value="取消">
		  <input type="button" class="btn btn-info" value="返回" v-on:click="turnBack">  
		</form>
	</div>
</template>
<style type="text/css">
.container .form-horizontal{
	text-align:center;
	margin-top: 50px;
}
</style>

<script>
	
    export default {
        data(){
            return{
                appName:'appName',
                describe:'describe',
                hosts:['主机一','主机二','主机三','主机四','主机五'],
                port:'3306'
            }
        },
        components:{
            
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