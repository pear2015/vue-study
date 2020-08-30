<template>
  <div class="root">
    <div class="title-bar">
      <span>vue知识解读</span>
    </div>
    <div v-for="(item,index ) in list" :key="item" class="parent">
      <div class="column" @click="showChildren(index)">
        <span>{{item.name}}</span>
        <img src="@/assets/icon-test_4.png" name="img" class="img"  />
      </div>
      <div class="children" style="display:none;">
        <div v-for="i in item.children" :key="i" class="child_column" @click="router(i.path)">
          <span>{{i.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.root {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title-bar {
  background-color: #0000ff5c;
  display: flex;
  margin: 0 auto;
   width: 100%;
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
  justify-content: center;
  font-size: 38px;
}
.title-bar span {
  color: #fff;
  margin: auto 0;
}
.parent {
  font-size: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  background-color: #eee;
  border-bottom: 1px solid rgba(0, 0, 0, 0.38);
  justify-content: center;
  line-height: 76px;
  height: 100%;
}
.column {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.column span {
  /* background-color: rgb(194, 189, 212); */
  width: 86%;
  text-align: left;
  padding-left: 50px;
  
}
.column .img {
  width: 40px;
  height: 40px;
  margin: auto 20px;
}

.children {
  display: flex;
  /* background-color: aqua; */
  height: 0px;
  flex-direction: column;

  height: 100%;
  text-align: left;
  
  background-color: aliceblue;
}
.child_column{

}
.children span {
  padding-left: 50px;
}
.children span:active {
  color: rgb(63, 23, 207);
}
.child_column:hover {
  background-color: rgb(150, 154, 221);
}
.ch .btn {
  width: 100px;
  height: 600px;
  font-size: 30px;
  line-height: 30px;
  color: rgb(131, 30, 30);
}
</style>

<script>
import { routerList } from "./api/router.data";
export default {
  data() {
    return {
      list: routerList
    };
  },
  methods: {
    showChildren(index) {
      if (
        document.getElementsByClassName("children")[index].style.display === "none"
      ) {
        document
          .getElementsByClassName("children")
          [index].setAttribute("style", "display:block");
          document.getElementsByName('img')[index].src=require('@/assets/icon-test_2.png');
          
      } else {
        document
          .getElementsByClassName("children")
          [index].setAttribute("style", "display:none");
           document.getElementsByName('img')[index].src=require('@/assets/icon-test_4.png');
      }
    },
    router(path){
      console.log('path======',path);
      this.$router.push({
        path:path
      })
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
  margin-top: 60px;
}
</style>
