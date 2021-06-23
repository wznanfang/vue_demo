<template>
  <div class="header">
    <el-container>
      <el-header>
          <h4 class="nanfeng">南风落尽</h4>
        <p class="loginOut">
          <router-link to="/login">退出</router-link>
        </p>
      </el-header>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Header",
  }
</script>

<style>
  .el-header {
    background-color: #55aaff;
    color: #333;
    text-align: center;
    line-height: 4rem;
  }

  .nanfeng{
    float: left;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  .loginOut {
    float: right;
    text-align: center;
    padding: 0;
    margin: 0;
  }

  .loginOut>a {
    text-decoration: none;
  }

</style>
