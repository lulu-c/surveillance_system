<template>
    <div class="container">
    	<div class="row">
        	<a v-link="{ path: '/editComputerRoom' }" type="button" class="btn btn-primary btn-lg">新建机房</a>
        	<table class="table table-bordered table-hover">
        		<tr class="info">
        			<th>机房名称</th>
        			<th>机房描述</th>
        			<th>zookerper地址</th>
        			<th>主机</th>
        			<th>服务</th>
        			<th>操作</th>
        		</tr>
        		<tr v-for="msg in msgList">
        			<td>{{ msg.name }}</td>
        			<td>{{ msg.der }}</td>
        			<td>{{ msg.IP }}</td>
        			<td>{{ msg.n }}</td>
        			<td>{{ msg.m }}</td>
        			<td>
        				<a v-link="{ path: '/editComputerRoom' }" type="button" class="btn btn-default">编辑</a>
        				<a v-link="{ path: '/computerRoom' }" type="button" class="btn btn-default">机房详情</a>
        				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#deletecroom" v-on:click="deletecroom" >删除</button>
        			</td>
        		</tr>
        	</table>
            <pagination></pagination>
            <delete-modal
            :title="title"
            :id="modalId"
            ></delete-modal>
        </div><!-- 机房 -->
    </div>
</template>

<style type="text/css">
    .container{
        width:80%;
    }
	.container .row {
		margin-top: 50px;
	}
	.container .row>button {
		margin-bottom: 30px;
	}
</style>

<script>
import pagination from '../others/pagination.vue';
import deleteModal from '../others/deleteModal.vue';
    export default {
        components:{
            pagination,
            deleteModal,
        },
        data(){
            return{
                cur:1,
                all:8,
                msgList:[{
                	name: "机房1",
                	der: "机房1",
                	IP: "194.168.42.12",
                	n: 1,
                	m: 2,
                },
                {
                    name: "机房1",
                    der: "机房1",
                    IP: "194.168.42.12",
                    n: 1,
                    m: 2,
                },
                {
                    name: "机房1",
                    der: "机房1",
                    IP: "194.168.42.12",
                    n: 1,
                    m: 2,
                },
                {
                    name: "机房1",
                    der: "机房1",
                    IP: "194.168.42.12",
                    n: 1,
                    m: 2,
                },
                {
                    name: "机房1",
                    der: "机房1",
                    IP: "194.168.42.12",
                    n: 1,
                    m: 2,
                },
                {
                    name: "机房1",
                    der: "机房1",
                    IP: "194.168.42.12",
                    n: 1,
                    m: 2,
                }
                ],
                title:"",
                modalId:""
            }
        },
        methods:{
            deletecroom:function(e){
                this.title="删除机房";
                this.modalId="deletecroom";
            },
        },
        events:{
        }
    }

</script>