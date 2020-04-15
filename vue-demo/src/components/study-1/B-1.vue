<template>
  <div class="container">
    <span>方式2：props:{param1:String} 接收String类型</span>
    <span>param1:{{param1}},param2:{{param2}}</span>
  </div>
</template>

<script>
export default {
  name: "B1",
  props: {
    param1: String,
    param2: String
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 800px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(0, 0, 0);
  background-color: blueviolet;
}
</style>
