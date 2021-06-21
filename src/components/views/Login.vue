<template>
  <div class="login">
    <h2 style="padding-top: 1rem;">南风落尽</h2>
    <el-form>
      <el-input class="username" placeholder="请输入账号" v-model="username" clearable prefix-icon="el-icon-user-solid"
        ref="username">
        <template slot="prepend">账号：</template>
      </el-input>
      <el-input class="password" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock"
        ref="password">
        <template slot="prepend">密码：</template>
      </el-input>
      <el-input class="vertifyCode" placeholder="验证码" prefix-icon="el-icon-key" ref="vertifyCode">
        <template slot="prepend">验证码：</template>
        <template slot="append">
          <image class="login-code" :src="vertifyCode" @click="getVertifyCode()" title="看不清？点击切换"></image>
        </template>
      </el-input>
      <p style="padding-top: 1rem;">
        <el-button type="success" plain @click="loginButton()">登录</el-button>
        <el-button type="primary" plain>注册</el-button>
      </p>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
        vertifyCode: '',
      }
    },

    methods: {
      //登录
      loginButton() {
        this.username = this.$refs.username.value;
        this.password = this.$refs.password.value;
        if (this.username === '' || this.password === '') {
          this.$message.error('账号或者密码不能为空！');
        } else {
          this.$axios.post('http://127.0.0.1:9999/back/admin/login', {
              username: this.username,
              password: this.$md5(this.password)
            })
            .then(result => {
              console.log(result.data)
              if (result.data.code === 0) {
                this.$message({
                  message: '登录成功！',
                  type: 'success'
                });
                //登录成功后跳转达到首页
                this.$router.push({
                  path: '/Home'
                })
              } else {
                this.$message({
                  message: result.data.message,
                  type: "error"
                });
              }
            })
            .catch(err => {
              console.log(err)
            })
          console.log("username:" + this.username);
          console.log("password:" + this.$md5(this.password));
        }
      },

      // 获取验证码
      getVertifyCode() {
        this.$axios.get('http://127.0.0.1:9999/common/getCode?' + Math.random(), {
          // responseType: 'blob'
        }).then(result => {
          console.log(result.data)
          this.vertifyCode = 'data:image/png;base64 ' + result.data.result.image
          console.log(this.vertifyCode)
        }).catch(err => {
          console.log(err)
        })
      },
    },

    created() {
      this.getVertifyCode() // 页面初始化从后端加载验证码
    },


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

  .username,
  .password,
  .vertifyCode {
    width: 25rem;
    margin-top: 1.5rem;
  }
</style>
