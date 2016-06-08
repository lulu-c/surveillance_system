<template>
	<h4>服务列表</h4>
	<a v-link="{ path: '/editService' }" type="button" class="btn btn-primary btn-lg">新建服务</a>
	<table class="table table-bordered table-hover">
		<tr class="info">
			<th>服务名称</th>
			<th>服务描述</th>
			<th>应用</th>
			<th>主机</th>
			<th>操作</th>
		</tr>
		<tr v-for="ser in serList">
			<td>{{ ser.name }}</td>
			<td>{{ ser.der }}</td>
			<td>{{ ser.n }}</td>
			<td>{{ ser.m }}</td>
			<td>
				<a v-link="{ path: '/editService' }" type="button" class="btn btn-default">编辑</a>
				<a v-link="{ path: '/service' }" type="button" class="btn btn-default">服务详情</a>
				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#deleteservice" v-on:click="deleteservice" >删除</button>
			</td>
		</tr>
	</table>
	<delete-modal
	:title="title"
	:id="modalId"
	></delete-modal>
</template>

<style type="text/css">
	h4 {
		margin-top: 30px;
		margin-bottom: 20px;
	}
	.btn-lg {
		margin-bottom: 30px;
	}
</style>

<script>
	import deleteModal from '../others/deleteModal.vue';
    export default {
        data(){
            return{
                serList:[{
                	name: "mysql服务",
                	der: "服务1描述",
                	n: 1,
                	m: 2,
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
            deleteservice:function(e){
                this.title="删除服务";
                this.modalId="deleteservice";
            },
        },
        events:{
        }
    }

</script>