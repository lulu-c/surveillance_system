<template>
    <div class="container">
		<div class="row">
	    	<button type="button" class="btn btn-primary btn-lg">新建产品</button>
	    	<table class="table table-bordered table-hover">
	    		<tr class="info">
	    			<th>产品名称</th>
	    			<th>产品描述</th>
	    			<th>服务</th>
	    			<th>应用</th>
	    			<th>操作</th>
	    		</tr>
	    		<tr>
	    			<td>周边优惠</td>
	    			<td>周边优惠</td>
	    			<td>1</td>
	    			<td>1</td>
	    			<td>
                        <a v-link="{ path: '/editProduct' }" type="button" class="btn btn-default">编辑</a>
	    				<a v-link="{ path: '/product' }" type="button" class="btn btn-default">产品详情</a>
	    				<button type="button" class="btn btn-default">删除</button>
	    			</td>
	    		</tr>
	    	</table>

	    </div><!-- 产品 -->
    	<div class="row">
        	<button type="button" class="btn btn-primary btn-lg">新建机房</button>
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
        				<button type="button" class="btn btn-default">删除</button>
        			</td>
        		</tr>
        	</table>
        </div><!-- 机房 -->
    </div>
</template>

<style type="text/css">
	.container .row {
		margin-top: 50px;
	}
	.container .row>button {
		margin-bottom: 30px;
	}
</style>

<script>

    export default {
        data(){
            return{
                msgList:[{
                	name: "机房1",
                	der: "机房1",
                	IP: "194.168.42.12",
                	n: 1,
                	m: 2,
                }
                ]
            }
        },
        components:{
            
        },
        methods:{
            
        },
        events:{
        }
    }

</script>