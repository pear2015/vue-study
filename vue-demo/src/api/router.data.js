const routerList = [
    {
        name: "vue知识讲解",
        children: [
            {
                name: "vue生命周期",
                path: "/pages/lifecycle/index"
            },
            {
                name: "数据绑定(包含表单)",
                path: "/pages/data-bind/index"
            },
            {
                name: "条件与循环",
                path: "/pages/if_for/index"
            },

            {
                name: "计算属性",
                path: "/"
            },
            {
                name: "事件处理",
                path: "/"
            },
            {
                name: "监听",
                path: "/"
            },

            {
                name: "父子组件通信",
                path: "/pages/props/parent"
            },
            {
                name: "组件注册",
                path: "/"
            },
            {
                name: "路由",
                path: "/"
            },
            {
                name: "插槽",
                path: "/"
            },
            {
                name: "自定义事件",
                path: "/"
            },
            {
                name: "动态组件和异步组件",
                path: "/"
            },
            {
                name: "状态管理",
                path: "/"
            },
            {
                name: "keep-Alive",
                path: "/pages/keep-Alive/index"
            }
        ]
    },
    {
        name: "vue组件封装",
        children: [
            {
                name: "video组件(支持m3u8)",
                path: "/page_1/video/index"
            }
        ]
    },
    {
        name: "vue源码",
        children: [
            {
                name: "模拟props",
                path: "/"
            }
        ]
    },
    {
        name: "vue遇到的常见问题分析",
        children: [

        ]
    }
]

module.exports = { routerList }