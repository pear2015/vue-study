<template>
  <div class="container">
     <button type="button"  class="btn" value="进入A" @click="keepAliveTest('/A')">进入A</button>
    <button type="button"  class="btn"  value="进入B" @click="keepAliveTest('/B')">进入B</button>
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
  name: "C",
  data() {
    return {
      test: "from B========="
    };
  },
  created: function() {
    console.log("created========C",this.param2);
  },
  activated: function() {
    console.log("activated========C",this.param2);
  },
  components: {  },
   methods: {
    keepAliveTest(path) {
      this.$router.push({
        path: path
      });
    }}
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
  color: rgb(0, 0, 0);
  font-size: 20px;
  background-color: cadetblue;
}
</style>
