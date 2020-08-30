var data = {
    lifecycleData: [
        {
            name: 'created',
            description: '实例组件刚创建，元素DOM和数据都还没有初始化，暂时不知道能在这个周期里面进行生命操作。'
        },
        {
            name: 'beforeMount',
            description: ' 数据data已经初始化完成，方法也已经可以调用，但是DOM未渲染。有人问了，请求都是异步的，并不会阻碍实例加载。这是我个人水平的问题，这边改正，在这个周期里面，请求因为是异步的，不会阻碍实例加载，除非是那些同步操走才会导致页面空白。这样说来，在这个周期里面进行请求，渲染速度反而会更快。'
        },
        {
            name: 'mounted',
            description: ' DOM未完成挂载，数据也初始化完成，但是数据的双向绑定还是显示{{}}，这是因为Vue采用了Virtual DOM（虚拟Dom）技术。先占住了一个坑。'
        },
        {
            name: 'beforeUpdate',
            description: ' 数据和DOM都完成挂载，在上一个周期占位的数据把值给渲染进去。可以在这边请求，不过created请求会更好一些。这个周期适合执行初始化需要操作DOM的方法。'
        },
        {
            name: 'updated',
            description: ' 只要是页面数据改变了都会触发，数据更新之前，页面数据还是原来的数据，当你请求赋值一个数据的时候会执行这个周期，如果没有数据改变不执行。'
        },
        {
            name: 'beforeDestroy',
            description: '这个周期是在组件销毁之前执行，在我项目开发中，觉得这个其实有点类似路由钩子beforeRouterLeave,都是在路由离开的时候执行，只不过beforeDestroy无法阻止路由跳转，但是可以做一些路由离开的时候操作，因为这个周期里面还可以使用data和method。比如一个倒计时组件，如果在路由跳转的时候没有清除，这个定时器还是在的，这时候就可以在这个里面清除计时器。'
        },
        {
            name: 'Destroy',
            description: '实例组件刚创建，元素DOM和数据都还没有初始化，暂时不知道能在这个周期里面进行生命操作。'
        }
    ]
    ,
    dataBind: [
        {
            name: '文本绑定',
            type: 'text',
            template: '<span>{{data}}</span>'
        },
        {
            name: '属性绑定',
            type: 'attr',
            template: '<span v-bind:id="attr_id">{{ data }}</span>'
        },
        {
            name: '样式绑定',
            type: 'style',
            template: '<div v-bind:class="{ active: isActive }"></div>'
        },
        {
            name: '内联样式绑定',
            type: 'inner_style',
            template: `<div v-bind:style="{fontSize: size + 'px', backgroundColor: bgcolor, width: width}"> vue 入门系列教程</div>`
        },
        {
            name: '计算属性',
            type: 'computed',
            template: ``
        },
        {
            name: '绑定的数据过滤器',
            type: 'filter',
            template: `"computed: {"+
               " getBirthday: function () {
                  var m = new Date(this.birthday);
                  return m.getFullYear() + '年' + m.getMonth() +'月'+ m.getDay()+'日';
                }
              }`
        },
        {
            name: '双向数据绑定',
            type: 'v-model',
            template: ``
        }
    ]
}
module.exports = { data }