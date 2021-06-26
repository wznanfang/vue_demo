<template>
  <div class="adminList">
    <Header></Header>
    <Aside></Aside>
    <Main v-bind:fData="AdminData"></Main>
  </div>

</template>

<script>
  import Header from "../common/Header.vue";
  import Aside from "../common/Aside.vue";
  import Main from "../common/Main.vue";

  export default {
    name: 'AdminList',

    components: {
      Header,
      Aside,
      Main,
    },

    data() {
      return {
        AdminData: '',
      }
    },

    // 页面初始化从后端加载数据
    /* mounted() {
      this.adminInfo(); //在html加载完成后进行，相当于在页面上同步显示后端数据
    }, */
    created() {
      this.adminInfo()
    },

    methods: {
      adminInfo() {
        let access_token = JSON.parse(sessionStorage.getItem("userInfo")).token.access_token;
        this.$axios.get('/api/back/admin/findAll', {
          headers: { //头部参数
            'Authorization': 'bearer ' + access_token
          }
        }).then(result => {
          this.AdminData = result.data.result
          console.log(this.AdminData)
        }).catch(err => {
          console.log(err)
        })
      }
    },



  }
</script>

<style>
</style>
