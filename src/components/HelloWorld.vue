<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Confirm text="你点一下试试" @message="getMessage"></Confirm>
  </div>
</template>

<script>
  import Confirm from "./sub/Confirm.vue"

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Confirm
    },
    methods: {
      getMessage(val) {
        this.$message({
          message: val, //val 为子组件传给父组件的值
          type: 'success'
        });
      }
    }
  }
</script>

<style scoped>

</style>
