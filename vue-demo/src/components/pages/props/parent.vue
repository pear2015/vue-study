<template>
  <div>
    <div class="props_parent">
      <span>父组件：param1：{{param1}} param2：{{param2}}</span>
      <input type="button" value="更新" @click="update" />
    </div>
    <children :param1="param1" :param2="param2"></children>
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
      param2: "props-2"
    };
  },
  methods: {
    update() {
      this.param2 = "update";
    }
  }
};
</script>
<style scoped>
.props_parent {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: rgb(150, 154, 221);
  background-color: blanchedalmond;
  justify-content: center;
  text-align: left;
  padding-left: 60px;
  font-size: 28px;
}
.props_parent input {
  width: 150px;
  height: 60px;
}
</style>