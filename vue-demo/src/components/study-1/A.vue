<template>
  <div>
    <!-- <B :param1="param1" :param2="param2"></B>
    <B1 :param1="param1" :param2="param2"></B1>
    <B2 :param2="param2"></B2> -->
  </div>
</template>

<script>
import B from "./B";
import B1 from "./B-1";
import B2 from "./B-2";
export default {
  name: "A",
  components: { B, B1, B2 },
  data() {
    return {
      param1: "A",
      param2: "B"
    };
  }
};
</script>