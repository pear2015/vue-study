<template>
  <div class="data_bind_container">
    <div v-for="(item ,index) of dataBind" class="parent">
      <div class="child">
        <span>{{item.name}}</span>
        <!-- <div class="content"></div> -->
        <div class="template">
          <span>{{item.template}}</span>
        </div>
      </div>
    </div>
    <a href="https://www.cnblogs.com/NightTiger/p/10399888.html">参考</a>
  </div>
</template>
<style scoped>
.data_bind_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.parent {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.child {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 32px;
  line-height: 32px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.content {
}
.template {
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  width: 100%;
}
.template  span{ 
  font-size: 36px;
  color: red;
}
</style>
<script>
import { data } from "../../api/common.data";
export default {
  name: "data-bind",
  data() {
    return {
      dataBind: data.dataBind
    };
  }
};
</script>