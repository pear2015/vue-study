<template>
  <div class="container">
    <span>
        方式1：props:'['param1'}},'param2']接收任意类型
    </span>
     <span>param1:{{param1}},param2:{{param2}}</span>
  </div>
</template>

<script>
export default {
  name: "B",
  props: ["param1", "param2"],
  data() {
    return {
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color:rgb(0, 0, 0);
  font-size: 20px;
  background-color:cadetblue;
}
</style>
