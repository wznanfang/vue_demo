<template>
  <div class="home">
    <Header></Header>
    <Aside></Aside>
    <Main text="你点一下试试" @message="getMessage()"></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../common/Header.vue";
  import Aside from "../common/Aside.vue";
  import Main from "../common/Main.vue";
  import Footer from "../common/Footer.vue";

  export default {
    name: 'Home',

    components: {
      Header,
      Aside,
      Main,
      Footer
    },

    data() {
      return {

      }
    },

    methods: {
      getMessage(val) {
        console.log(this.val)
        this.$message({
          message: val, //val 为子组件传给父组件的值
          type: 'success'
        });
      }
    }



  }
</script>

<style>
</style>
