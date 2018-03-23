const routers = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            title: '登陆'
        },
        component: (resolve) => require(['./views/pages/login.vue'], resolve)
    },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/common/home.vue'], resolve),
        children: [
            {
                path: '/',
                meta: {
                    title: '这是首页'
                },
                component: (resolve) => require(['./views/pages/index.vue'], resolve)
            },
            {
                path: '/group',
                meta: {
                    title: '群组'
                },
                component: (resolve) => require(['./views/pages/group.vue'], resolve)
            },
            {
                path: '/home',
                meta: {
                    title: '个人主页'
                },
                component: (resolve) => require(['./views/pages/home.vue'], resolve)
            },
            {
                path: '/rank',
                meta: {
                    title: '排行榜'
                },
                component: (resolve) => require(['./views/pages/rank.vue'], resolve)
            },
            {
                path: '/setup',
                meta: {
                    title: '出题'
                },
                component: (resolve) => require(['./views/pages/setupQuestions.vue'], resolve)
            },
            {
                path: '/campus',
                meta: {
                    title: '高校'
                },
                component: (resolve) => require(['./views/pages/campus.vue'], resolve)
            },
            {
                path: '/search',
                meta: {
                    title: '搜索结果'
                },
                component: (resolve) => require(['./views/pages/search.vue'], resolve)
            },
            {
                path: '/settings',
                meta: {
                    title: '设置'
                },
                component: (resolve) => require(['./views/pages/settings.vue'], resolve)
            },
        ]
    },
    {
        path: '/login',
        meta: {
            title: '登陆'
        },
        component: (resolve) => require(['./views/pages/login.vue'], resolve)
    },
];
export default routers; 