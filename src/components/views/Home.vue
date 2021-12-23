<template>
  <div class="home">
    <Header></Header>
    <Aside></Aside>
    <el-main>
      斜风追逐的影子，和地上的落叶，发生了争执......
    </el-main>
  </div>
</template>

<script>
  import Header from "../common/Header.vue";
  import Aside from "../common/Aside.vue";
  import Main from "../common/Main.vue";

  export default {
    name: 'Home',

    components: {
      Header,
      Aside,
      Main,
    },

    data() {
      return {

      }
    },

  }
</script>

<style>
</style>
