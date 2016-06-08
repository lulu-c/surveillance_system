<template>
	<h4>主机列表</h4>
	<a v-link="{ path: '/editHost'}" type="button" class="btn btn-primary btn-lg">新建主机</a>
	<table class="table table-bordered table-hover">
		<tr class="info">
			<th>主机名</th>
			<th>主机描述</th>
			<th>IP</th>
			<th>应用</th>
			<th>操作</th>
		</tr>
		<tr v-for="host in hostList">
			<td>{{ host.name }}</td>
			<td>{{ host.der }}</td>
			<td>{{ host.IP }}</td>
			<td>{{ host.n }}</td>
			<td>
				<a v-link="{ path: '/editHost'}" type="button" class="btn btn-default">编辑</a>
				<a v-link="{ path: '/host' }" type="button" class="btn btn-default">主机详情</a>
				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#deletehost" v-on:click="deletehost" >删除</button>
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
                hostList:[{
                	name: "主机1",
                	der: "主机描述",
                	IP: "194.168.42.12",
                	n: 1,
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
            deletehost:function(e){
                this.title="删除主机";
                this.modalId="deletehost";
            },
        },
        events:{
        }
    }

</script>