<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="login-panel panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">请先登录</h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" id="loginForm">
                            <fieldset>
                                <div class="form-group">
                                    <input class="form-control" placeholder="用户名" name="username" type="text" autofocus v-model="loginUserName">
                                </div>
                                <div class="form-group">
                                    <input class="form-control" placeholder="密码" name="password" type="password" v-model="loginPwd">
                                </div>
                                <div class="form-group">
                                    <input type="button" v-on:click="userlogin" class="btn btn-lg btn-success btn-block" value="登录" />
                                </div>
                                <div class="alert alert-danger" v-bind:style="{display: tipsDisplay}">用户名或密码不正确</div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>