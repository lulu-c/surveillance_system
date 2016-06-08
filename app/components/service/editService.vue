<template>
  <div class="container" style="text-align:center;">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="serName" class="col-sm-2 control-label">服务名称</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="serName" name="serName" v-model="serName">
      </div>
    </div>
    <div class="form-group">
      <label for="describe" class="col-sm-2 control-label">服务描述</label>
       <div class="col-sm-10">
        <textarea class="form-control" rows="3" id="describe" name="describe" v-model="describe"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2 control-label" for="addServiceApp">添加服务应用</label>
      <div class="controls col-sm-10">
        <select id="addServiceApp" class="form-control" name="addServiceApp">
          <option v-for="serviceApp in addServiceApp">{{serviceApp}}</option>
        </select>
      </div>
    </div>
    <input type="submit" class="btn btn-success" value="保存"> 
    <input type="reset" class="btn btn-warning" value="取消"> 
    <input type="button" class="btn btn-info" value="返回" v-on:click="turnBack">
  </form>
<div>
</template>

<style type="text/css">
</style>

<script>
export default {
        data(){
            return{
                  serName: "服务1",
                  describe: "127.0.0.1",
                  addServiceApp: ['mysql主','mysql从']                
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