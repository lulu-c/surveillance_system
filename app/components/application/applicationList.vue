<template>
	<h4>应用列表</h4>
	<a v-link="{path:'/editApplication'}" type="button" class="btn btn-primary btn-lg">新建应用</a>
	<table class="table table-bordered table-hover">
		<tr class="info">
			<th>应用名</th>
			<th>应用描述</th>
			<th>IP</th>
			<th>端口</th>
			<th>操作</th>
		</tr>
		<tr v-for="app in appList">
			<td>{{ app.name }}</td>
			<td>{{ app.der }}</td>
			<td>{{ app.IP }}</td>
			<td>{{ app.n }}</td>
			<td>
				<a v-link="{path:'/editApplication'}" type="button" class="btn btn-default">编辑</a>
				<button type="button" class="btn btn-default">应用详情</button>
				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#deleteapp" v-on:click="deleteapp" >删除</button>
			</td>
		</tr>
	</table>
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
            deleteapp:function(e){
                this.title="删除应用";
                this.modalId="deleteapp";
            },
        },
        events:{
        }
    }

</script>