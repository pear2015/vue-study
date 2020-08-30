<template>
  <div id="app">
    <div class="container">
      <div class="headers" @click="goback()">
       <img src="@/assets/icon-test_3.png">
        <span style="margin-left:20px;">{{titlebar}} </span>
      </div>
      <div class="content"> 
        <keep-alive include="['A']">
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data:{
    titlebar:"首页",
  },
  created() {},
  mounted() {},
  watch:{
  $route(to,from){
    console.log(to);
  }
},
  methods: {
    goback() {
      if (this.$route.path !== "/") {
        this.$router.back(-1);
      }
      console.log("route=======", this.$route.path);
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
  display: flex;
  margin: 0;

  padding: 0;
}
#app img{
  height: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f3f1ef;
}
.headers {
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: #121212;
  font-size: 36px;
  color: #fff;
  width: 100%;
  height: 80px;
  position: fixed;
}
.headers span {
  padding-left: 36px;
  line-height: 36px;
}
.content {
  display: flex;
  margin-top: 80px;
  width: 100%;
  height: calc(100% - 80px);
}
</style>
