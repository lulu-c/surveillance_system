module.exports = function(router) {
    // normal routes
    router.map({
        // basic example
        '/login': {
            // the component can also be a plain string component id,
            // but a component with that id must be available in the
            // App component's scope.
            name: 'login',
            component: require('./components/user/login.vue'),
            auth: false
        },
        '/index': {
            component: require('./components/main/cRoom.vue'),
            auth: true
        },
        '/product': {
            component: require('./components/product/product.vue'),
            auth: true
        },
        '/computerRoom': {
            component: require('./components/computerRoom/computerRoom.vue'),
            auth: true
        },
        '/service': {
            component: require('./components/service/serviceListInfo.vue'),
            auth: true
        },
        '/host': {
            component: require('./components/host/hostListInfo.vue'),
            auth: true
        },
        '/editProduct':{
            component: require('./components/product/editProduct.vue'),
            auth: true
        },
        '/editComputerRoom':{
            component: require('./components/computerRoom/editComputerRoom.vue'),
            auth: true
        },
        '/editService':{
            component: require('./components/service/editService.vue'),
            auth: true
        },
        '/editHost':{
            component:require('./components/host/editHost.vue'),
            auth:true
        },
        '/editApplication':{
            component:require('./components/application/editApplication.vue'),
            auth:true
        },
        '/productList':{
            component:require('./components/main/productList.vue'),
            auth:true
        },
        '/cRoom':{
            component:require('./components/main/cRoom.vue'),
            auth:true
        }
    })

    // redirect
    router.redirect({
        '/': '/index',
    })

    router.beforeEach((transition) => {
       
        if (transition.to.name == 'login') {
            $('#nav').hide();
        } else {
            $('#nav').show();
        }

        if (!transition.to.auth || localStorage.token) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            $('#nav').hide();
            transition.redirect('/login?redirect=' + redirect);
        }
    })
}