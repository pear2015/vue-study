<template>
  <div style="width:100%; background-color: blanchedalmond;">
    <div class="props_parent">
      <span>父组件</span>
      <div style="displayparam1:flex;flex-direction:row">
        <span>参数param1：(默认值:props-1)</span>
        <input type="text" :value="param1" placeholder="请输入" ref="input1" />
      </div>
      <div style="displayparam1:flex;flex-direction:row">
        <span>参数param2：(默认值:props-1)</span>
        <input type="text" :value="param2" placeholder="请输入"  ref="input2"/>
      </div>
      <input type="button" value="父传子" @click="update" />
      <span style="color:red">接收子组件的传值：{{message}}</span>
    </div>

    <children :param1="param1" :param2="param2" @sendvalue="sendvalue"></children>
  </div>
</template>

<script>
import children from "./children";
export default {
  name: "parent",
  components: { children },
  data() {
    return {
      param1: "props-1",
      param2: "props-2",
      message: ""
    };
  },
  created() {
  },
  methods: {
    update() {
        console.log("update=====",  this.param1, this.param2);
      this.param1 = this.$refs.input1.value;
      this.param2 = this.$refs.input2.value;
    },
    sendvalue(value){
       this.message = "parame1:" + value;
    }
  }
};
</script>
<style scoped>
.props_parent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  justify-content: center;
  text-align: left;
  padding-left: 60px;
  font-size: 28px;
}
.props_parent input {
  height: 60px;
}
.props_parent input[type="text"] {
  width: 60%;
  height: 60px;
}
.props_parent input[type="button"] {
  width: 150px;
  height: 60px;
  color: #fff;
  background-color: cornflowerblue;
}
</style>