<template>
  <div class="computed_watch">
    <div class="content_computed">
      <span>computed</span>
      <span style="color:red">现在时间：{{getComputedValue}}</span>
    </div>
    <div class="content_watch">
      <span>watch</span>
      <label>
        name:
        <input type="text" v-model="name" />
      </label>
      <span>name:{{getName}}</span>
      <span style="color:red">watchMessage:{{message}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "computed_watch",
  data() {
    return {
      name: "",
      message: ""
    };
  },
  computed: {
    getComputedValue() {
      return Date.now();
    },
    getName() {
      return this.name;
    }
  },
  watch: {
    name(val, old) {
      this.name = val;
      this.message = "name:" + val + "oldValue:" + val;
    }
  }
};
</script>
<style scoped>
.computed_watch {
  display: flex;
  flex-direction: column;
  width: 750px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(243, 241, 239);
}
.content_computed {
  display: flex;
  flex-direction: column;
  border: 1px solid #9e8c8c;
  height: 100px;
}
.content_watch {
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #9e8c8c;
}
</style>