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
                    title: '小组'
                },
                component: (resolve) => require(['./views/pages/group.vue'], resolve)
            },
            {
                path: '/solvedQuestion',
                meta: {
                    title: '已解决'
                },
                component: (resolve) => require(['./views/pages/solvedQuestion.vue'], resolve)
            },
            {
                path: '/agroup/:id',
                meta: {
                    title: '小组'
                },
                component: (resolve) => require(['./views/pages/group/a-group.vue'], resolve)
            },
            {
                path: '/challenge',
                meta: {
                    title: '挑战'
                },
                component: (resolve) => require(['./views/pages/challenge.vue'], resolve)
            },
            {
                path: '/home/:id',
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
            {
                path: '/majorRank',
                meta: {
                    title: '专业排行'
                },
                component: (resolve) => require(['./views/pages/majorRank.vue'], resolve)
            },
            {
                path: '/question/:id',
                meta: {
                    title: '问题页面'
                },
                component: (resolve) => require(['./views/pages/question.vue'], resolve),
            },
            {
                path: '/label/:id',
                meta: {
                    title: '标签'
                },
                component: (resolve) => require(['./views/pages/label.vue'], resolve)
            },
            {
                path: '/404',
                meta: {
                    title: '404'
                },
                component: (resolve) => require(['./views/pages/404.vue'], resolve),
            },
            {
                path: '/msgCart',
                meta: {
                    title: 'msgCart'
                },
                component: (resolve) => require(['./views/components/msgCart.vue'], resolve),
            },
            {
                path: '/setup',
                meta: {
                    title: '分享题目'
                },
                component: (resolve) => require(['./views/common/setup.vue'], resolve)
            },
            {
                path: '/submit',
                meta: {
                    title: 'submit'
                },
                component: (resolve) => require(['./views/questions/submitQuestion.vue'], resolve)
            },
            {
                path: '/editQ',
                meta: {
                    title: '分享题目'
                },
                component: (resolve) => require(['./views/questions/editQuestion.vue'], resolve)
            },
            {
                path: '/submitSuccess',
                meta: {
                    title: '分享成功~'
                },
                component: (resolve) => require(['./views/questions/submitQuestion.vue'], resolve)
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