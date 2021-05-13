<template>
  <div class="login">
    <h2 style="padding-top: 1.25rem;">南风落尽</h2>
    <el-input class="username" placeholder="请输入账号" v-model="username" clearable prefix-icon="el-icon-user-solid">
      <template slot="prepend">账号：</template>
    </el-input>
    <el-input class="password" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock">
      <template slot="prepend">密码：</template>
    </el-input>
    <p style="padding-top: 1.25rem;">
      <el-button type="success" plain>登录</el-button>
      <el-button type="primary" plain>注册</el-button>
    </p>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style>
  body {
    width: 120rem;
    height: 55rem;
    margin: 0;
    padding: 0;
    text-align: center;
    background-image: url(../../assets/login.jpg);
  }

  .login {
    width: 30.75rem;
    height: 22.5rem;
    background-color: #ffffff;
    /* opacity: 0.8; //背景透明度 */
    border-radius: 0.3125rem;
    margin: 0 auto;
    margin-right: 18.75rem;
    position: relative;
    transform: translateY(50%);
  }

  .username,.password{
    width: 25rem;
    margin-top: 2rem;
  }



</style>
