<template>
  <div class="props_childrean">
    <span>子组件：</span>
    <div>
      接收父组件传来的值:param1:
      <span style="color:red">{{getParam1}}</span>, param2:
      <span style="color:red">{{getParam2}}</span>
    </div>
      <span>修改param1：</span>
      <input type="text" :value="param1" placeholder="修改参数param1" ref="children" />
    <input type="button" value="子传父" @click="send" />
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
  computed: {
    getParam1() {
      return this.param1;
    },
    getParam2() {
      return this.param2;
    }
  },
  methods: {
    send() {
      this.$emit("sendvalue", this.$refs.children.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.props_childrean {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
  align-content: flex-start;
  text-align: left;
  padding-left: 60px;
  font-size: 28px;
}
.props_childrean input {
  height: 60px;
}
.props_childrean input[type="text"] {
  width: 60%;
  height: 60px;
}
.props_childrean input[type="button"] {
  width: 150px;
  height: 60px;
  color: #fff;
  background-color: cornflowerblue;
}
</style>
