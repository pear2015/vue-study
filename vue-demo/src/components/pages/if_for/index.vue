<template>
  <div class="if_for_container">
    <div class="content_if">
      <div style="height:60px">
        <span v-if="dataIF">dom元素创建</span>
      </div>
      <div style="height:60px;margin-right:80px">
        <input type="button" @click="dataIFfunction" v-bind:value="dataIF?'dom元素不创建':'dom元素创建'" />
      </div>
    </div>
    <div class="content_show">
      <div style="height:60px">
        <span v-show="dataShow">dom元素显示</span>
      </div>
      <div style="height:60px;margin-right:80px">
        <input type="button" @click="dataShowfunction" v-bind:value="dataShow?'dom元素不显示':'dom元素显示'" />
      </div>
    </div>
    <div class="content_for">
      <span>for循环</span>
      <span>1、数字遍历</span>
      <div class="for for_1">
        <div v-for="index in 9" :key="index">
          <span>{{index}}</span>
        </div>
      </div>
      <span>2、普通数组遍历:["a", "b", "c"]</span>
      <div class="for for_2">
        <div v-for="index in array" :key="index">
          <span>{{index}}</span>
        </div>
      </div>
      <span>3、对象数组遍历:[{name:'zhangsan',age:12},{name:"lisi",age:16}]</span>
      <div class="for for_3">
        <div v-for="(item,index) in array1" :key="index">
          <span>{{index +':' +item.name+","+item.age}}</span>
        </div>
      </div>
      <span>4、对象数遍历:{name:'zhangsan',age:12}</span>
      <div class="for for_4">
        <div v-for="(item,index) in array2" :key="index">
          <span>{{item}}</span>
        </div>
      </div>
      <span>
        5、数组操作: array3: [
        { id: 1, name: "zhangsan", age: 12 },
        { id: 2, name: "lisi", age: 16 }
        ],
      </span>
      <label>
        Id:
        <input type="text" v-model="id" />
      </label>
      <label>
       name: <input type="text" v-model="name" />
      </label>
      <input type="button" @click="add" value="添加" />
      <div class="for for_5">
        <div v-for="item in array3" :key="item.index">
          <span>{{item.id}} :{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "if_for",
  data() {
    return {
      dataIF: true,
      dataShow: true,
      array: ["a", "b", "c"],
      array1: [
        { name: "zhangsan", age: 12 },
        { name: "lisi", age: 16 }
      ],
      array2: { name: "zhangsan", age: 12 },
      array3: [
        { id: 1, name: "zhangsan", age: 12 },
        { id: 2, name: "lisi", age: 16 }
      ],
      id: "",
      name: ""
    };
  },
  methods: {
    dataIFfunction() {
      this.dataIF = !this.dataIF;
    },
    dataShowfunction() {
      this.dataShow = !this.dataShow;
    },
    add() {
      this.array3.unshift({ id: this.id, name: this.name });
    }
  }
};
</script>
<style scoped>
.if_for_container {
  display: flex;
  flex-direction: column;
  width: 750px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(243, 241, 239);
}
.content_if {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  height: 200px;
  border: 1px solid #9e8c8c;
}
.content_show {
  display: flex;
  flex-direction: column;
  font-size: 32px;
  height: 200px;
  border: 1px solid #9e8c8c;
}
.content_for {
  display: flex;
  flex-direction: column;
}
.for {
  display: flex;
  flex-direction: column;
  height: 80px;
  color: rgb(212, 32, 32);
  border: 1px solid #9e8c8c;
}
.for_1 {
  display: flex;
  flex-direction: row;
  color: rgb(212, 32, 32);
  border: 1px solid #9e8c8c;
}
.for_2 {
  display: flex;
  flex-direction: row;
}
.for_3 {
  display: flex;
  flex-direction: column;
}
input[type="button"] {
  width: 150px;
  height: 60px;
  color: #fff;
  background-color: cornflowerblue;
}
input[type="text"] {
  width: 60%;
  height: 60px;
}
</style>