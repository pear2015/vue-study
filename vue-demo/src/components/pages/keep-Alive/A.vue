<template>
  <div>
      路由
     <button type="button"  class="btn" value="进入B" @click="keepAliveTest('/B')">进入B</button>
    <button type="button"  class="btn"  value="进入C" @click="keepAliveTest('/C')">进入C</button>
  </div>
</template>
<style scoped>
 .btn{
     width:100px;
     height: 60px;
     font-size: 30px;
     line-height: 30px;
 }
</style>
<script>

export default {
  name: "A",
  components: {  },
  data() {
    return {
      param1: "A",
      param2: "B",
      test:"test========="
    };
  },
    created:function(){
   console.log('created========A')
  },
  activated:function(){
     console.log('activated========A')
  },
   methods: {
    keepAliveTest(path) {
      this.$router.push({
        path: path
      });
    }}
};
</script>