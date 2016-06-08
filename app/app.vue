<template>
    <!-- Navigation -->
    <nav id="nav" class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-brand" href="index.html">监控管理后台</a>
        </div>
        <!-- /.navbar-header -->

        <ul class="nav navbar-top-links navbar-right">
            <li>
                <a v-on:click="logout" v-link="{ path: '/login', replace: true }"> <i class="fa fa-sign-out fa-fw" ></i> 登出 </a>
            </li>
        </ul>
        <!-- /.navbar-top-links -->

        <div class="col-sm-2 sidebar">
			<h1>home</h1>
	        <ul class="nav nav-pills nav-stacked">
			 <!--  <li role="presentation" class="active"><a href="#">Home</a></li> -->
			  <li role="presentation"><a href="#" v-link="{path:'/cRoom'}">机房</a></li>
			  <li role="presentation"><a href="#" v-link="{path:'/productList'}">产品</a></li>
			</ul>
	    </div>
    </nav>

	<!-- main view -->
	<div class="col-sm-9 col-sm-offset-2">
	    <router-view></router-view>		    
	</div>
</template>

<style type="text/css">
	.navbar-right {
		margin-right: 0;
	}
	.nav>li>a {
		padding: 15px;
	}
    .sidebar {
        position: fixed;
        top: 51px;
        bottom: 0;
        left: 0;
        padding: 0;
        padding-top:2em; 
        z-index: 1000;
        display: block;	       
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
        background-color: #f5f5f5;
        border-right: 1px solid #eee;
        color: #fff;
        margin: 0;
    }
    .sidebar h1{
    	background: #5bc0de;
    	text-align: center;
    }
    .sidebar li a{
    	font-weight:bold;
    	text-align: center;
    	color: #5bc0de;
    }
    .nav > li > a:hover,
	.nav > li > a:focus {
	  text-decoration: none;
	  background-color: #eeeeee;
	}
</style>

<script>
export default {
	data () {
		return {
			msg: 'Hello from vue-loader!cghsdfg'
		}
	}
}
</script>