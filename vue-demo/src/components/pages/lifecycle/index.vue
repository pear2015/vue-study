<template>
  <div class="container">
    <span style="font-size:36px">生命周期 官网图片</span>
    <div class="img">
      <img src="@/assets/lifecycle.png" />
    </div>
    <div class="content">
      <span>生命周期钩子函数</span>
      <div class="header">
        <a v-for="item in lifecycleData"  :href="'#'+item.name" >
          {{item.name}}</a>
      </div>
      <div class="content_font" style="display:flex;flex-direction:column; ">
        <div class="lifecycle" v-for="item in lifecycleData" :id="item.name">
          <span style="font-size:38px;">{{item.name}}</span>
          <span style="font-size:24px;">{{item.description}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
img {
  width: 400px;
  height: 1000px;
}
.btn {
  width: 100px;
  height: 60px;
  font-size: 30px;
  line-height: 30px;
}
.content {
  display: flex;
  flex-direction: column;
}
.content .header {
  display: flex;
  flex-direction: column;
  font-size: 38px;
  padding-top:20px;
  padding-bottom: 20px;
}
.content .header a {
 padding-top:20px;
  padding-bottom: 20px;
}
.content .header  a:hover {
background-color: #eee;
}
.lifecycle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #eee;
  margin-bottom: 20px;

  line-height: inherit;
  padding: 18px;
  text-align: left;
}
</style>
<script>
import { data } from "../../api/common.data";
export default {
  name: "lifecycle",
  components: {},
  data() {
    return {
      lifecycleData: data.lifecycleData
    };
  },
  created: function() {
    console.log("created========");
  },
  activated: function() {
    console.log("activated========");
  },
  methods: {}
};
</script>