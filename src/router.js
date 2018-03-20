const routers = [
    {
        path: '/',
        meta: {
            title: '登陆'
        },
        component: (resolve) => require(['./views/pages/login.vue'], resolve)
    },
    {
        path: '/index',
        meta: {
            title: '这是首页'
        },
        component: (resolve) => require(['./views/pages/index.vue'], resolve)
    },
];
export default routers;