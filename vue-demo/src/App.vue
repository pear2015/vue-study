<template>
  <div id="app">
    <div class="headers" @click="goback()">
      <span>返回</span>
    </div>
    <div class="content">
      <keep-alive include="['A']">
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  created(){
    console.log('1=============');
  },
  methods: {
    goback() {
      this.$router.back();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.headers {
  text-align: left;
  /* margin: 0 auto; */
  align-items: center;
  justify-content: center;
  background-color: #121212;
  font-size: 36px;
  color:#fff;
  width:100%;
} 
.headers span{
  padding-left: 20px;
}
.content{
  width: 100%;
}
</style>
