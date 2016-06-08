<template>
	<div class="container">
		<dl>
			<dt>周边优惠</dt>
			<dd>周边优惠</dd>
		</dl>
		<service></service><!-- 服务列表 -->
		<host></host><!-- 主机列表 -->
		<application></application><!-- 应用列表 -->
	</div>
</template>

<style type="text/css">
	dl {
		margin-top: 30px;
	}
	dt {
		margin-bottom: 20px;
	}
</style>

<script>
	import service from '../service/serviceList.vue'
	import host from '../host/hostList.vue'
	import application from '../application/applicationList.vue'
    export default {
        data(){
        },
        components:{
            service,
            host,
            application,
        },
        methods:{
            
        },
        events:{
        }
    }

</script>