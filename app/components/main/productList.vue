<template>
    <div class="container">
		<div class="row">
	    	<a v-link="{ path: '/editProduct' }" type="button" class="btn btn-primary btn-lg">新建产品</a>
	    	<table class="table table-bordered table-hover">
	    		<tr class="info">
	    			<th>产品名称</th>
	    			<th>产品描述</th>
	    			<th>服务</th>
	    			<th>应用</th>
	    			<th>操作</th>
	    		</tr>
	    		<tr v-for="msg in msgList">
	    			<td>{{msg.productName}}</td>
	    			<td>{{msg.describe}}</td>
	    			<td>{{msg.serNum}}</td>
	    			<td>{{msg.appNum}}</td>
	    			<td>
                        <a v-link="{ path: '/editProduct' }" type="button" class="btn btn-default">编辑</a>
	    				<a v-link="{ path: '/product' }" type="button" class="btn btn-default">产品详情</a>
	    				<button type="button" class="btn btn-outline btn-danger" data-toggle="modal" data-target="#deleteproduct" v-on:click="deleteproduct" >删除</button>
	    			</td>
	    		</tr>
	    	</table>
            <pagination></pagination>
            <delete-modal
            :title="title"
            :id="modalId"
            ></delete-modal>
	    </div><!-- 产品 -->
    </div>
    
</template>
import pagination from '../others/pagination.vue'
<style type="text/css">
	.container .row {
		margin-top: 50px;
	}
	.container .row>button {
		margin-bottom: 30px;
	}
</style>

<script>
    import deleteModal from '../others/deleteModal.vue';
    export default {
        data(){
            return{
                msgList:[{
                	productName:'周边优惠',
                    describe:'周边优惠',
                	serNum: 1,
                    appNum: 2,
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
            //删除某条特定产品
            deleteproduct:function(e){
                this.title="删除产品";
                this.modalId="deleteproduct";
            },
        },
        events:{
        }
    }

</script>