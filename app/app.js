require('../node_modules/bootstrap/dist/js/bootstrap.min.js');
bootstrap = require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
Vue = require('../node_modules/vue/dist/vue.min.js');
VueRouter = require('../node_modules/vue-router/dist/vue-router.min.js');
configRouter = require('./router-config.js');

// install router
Vue.use(VueRouter);

// create router
const router = new VueRouter({
    hashbang: true, //hash路由
    saveScrollPosition: true,
})

// configure router
configRouter(router);

const App = Vue.extend(require('./app.vue'));
router.start(App, '#app');
