<template>
    <div class="container">
    	<dl>
    		<dt>mysql服务</dt>
    		<dd>服务1描述</dd>
    	</dl>
    	<h4>服务应用</h4>
    	<table class="table table-bordered table-hover">
    		<tr class="info">
    			<th>应用名称</th>
    			<th>应用描述</th>
    			<th>主机IP</th>
    			<th>主机端口</th>
    			<th>操作</th>
    		</tr>
    		<tr v-for="app in appList">
    			<td>{{ app.name }}</td>
    			<td>{{ app.der }}</td>
    			<td>{{ app.IP }}</td>
    			<td>{{ app.n }}</td>
    			<td>
    				<a v-link="{path:'/editApplication'}" type="button" class="btn btn-default">编辑应用</a>
    				<button type="button" class="btn btn-default">应用详情</button>
    				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#cancel" v-on:click="cancel" >取消关联该应用</button>
    			</td>
    		</tr>
    	</table>
    </div>
    <delete-modal
	:title="title"
	:id="modalId"
	></delete-modal>
</template>

<script>
	import deleteModal from '../others/deleteModal.vue';
    export default {
        data(){
            return{
                appList:[{
                	name: "sql主",
                	der: "MySQL主节点",
                	IP: "194.168.42.12",
                	n: 3306,
                }
                ],
                title:"",
                modalId:"",
            }
        },
        components:{
            deleteModal,
        },
        methods:{
            cancel:function(e){
                this.title="取消关联该应用";
                this.modalId="cancel";
            },
        },
        events:{
        }
    }

</script>