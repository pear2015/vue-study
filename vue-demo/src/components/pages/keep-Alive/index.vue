<template>
  <div>
   <span>keep-alive条件缓存</span>

   <span>A 页面进入B页面，A页面缓存  </span>
   <span> B 页面返回A页面  B页面不缓存</span>
   <span> B 页面进入C页面  B页面缓存</span>
   
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