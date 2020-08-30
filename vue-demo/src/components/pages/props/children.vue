<template>
  <div class="props_childrean">
    <span>子组件： data: 定义 param1：test1；param1：test2</span>
    <span>props: {param1: String }</span>
    <span style="color:red">接收:param1:{{param1}}, param2:{{param2}}</span>
  </div>
</template>

<script>
export default {
  name: "children",
  props: {
    param1: String
  },
  data: {
    param1: "test1",
    param2: "test2",
    msg: "Welcome to Your Vue.js App"
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.props_childrean {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
  background-color: #ff880086;
  align-content: flex-start;
  text-align: left;
  padding-left: 60px;
  font-size: 28px;
}
</style>
