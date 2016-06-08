<template>
	<div class="container">
		<dl>
			<dt>机房1</dt>
			<dd>机房</dd>
		</dl>
		<service></service><!-- 服务列表 -->
		<host></host><!-- 主机列表 -->
		<application></application><!-- 应用列表 -->
	</div>
</template>

<script type="text/javascript">
    import service from '../service/serviceList.vue'
	import host from '../host/hostList.vue'
	import application from '../application/applicationList.vue'
	export default {
        components:{
            service,
            host,
            application,
        },
        methods: {
        }
	}
</script>