<template>
  <div class="container">
    <span>方式3：props:{param1:{type:String,default:'test1'}} 接收String类型，默认值A</span>
    <span>param1:{{param1}},param2:{{param2}}</span>
  </div>
</template>

<script>
import B from "./B";
export default {
  name: "B2",
  props: {
    param1: {
      type: String,
      default: "test1"
    },
    param2: {
      type: String,
      default: "B"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  font-size: 20px;
  background-color: blanchedalmond;
}
</style>
