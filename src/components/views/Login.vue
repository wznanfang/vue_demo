<template>
  <div class="login">
    <h2 style="padding-top: 1rem;">南风落尽</h2>
    <el-form>
      <el-input class="username" placeholder="请输入账号" v-model="username" clearable prefix-icon="el-icon-user-solid"
        value="superAdmin" ref="username">
        <template slot="prepend">账号：</template>
      </el-input>
      <el-input class="password" placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock"
        ref="password">
        <template slot="prepend">密码：</template>
      </el-input>
      <el-input class="vertifyCode" placeholder="请输入验证码" v-model="vertifyCode" prefix-icon="el-icon-key" ref="vertifyCode">
        <template slot="prepend">验证码：</template>
        <template slot="append">
          <img style="height: 2rem; width: 6rem;padding-top: 0.1875rem;" :src="changeImage" @click="getVertifyCode()"
            title="看不清？点击切换" />
        </template>
      </el-input>
      <p style="padding-top: 1rem;">
        <el-button type="success" plain @click="loginButton()">登录</el-button>
      </p>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: 'superAdmin',
        password: 'nflj123456',
        vertifyCode: '',
        changeImage: '',
      }
    },

    methods: {
      // 获取验证码
      getVertifyCode() {
        this.$axios.get('/api/common/getCode?' + Math.random(), {}).then(result => {
          this.changeImage = 'data:image/png;base64,' + result.data.result.image
          sessionStorage.setItem("codes", result.data.result.codes);
        }).catch(err => {
          console.log(err)
        })
      },

      //登录
      loginButton() {
        this.username = this.$refs.username.value;
        this.password = this.$refs.password.value;
        this.vertifyCode = this.$refs.vertifyCode.value;
        let codes = sessionStorage.getItem("codes");
        //验证账号密码验证码等
        if (this.username === '' || this.password === '') {
          this.$message.error('账号或者密码不能为空！');
        } else if (this.vertifyCode === '') {
          this.$message.error('验证码不能为空！');
        } else if (this.vertifyCode != codes) {
          this.$message.error('验证码错误！');
        } else {
          this.$axios.post('/api/back/admin/login', {
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
        }
      },

      keyDown(e) {
        //如果是回车则执行登录方法
        if (e.keyCode == 13) {
          this.loginButton();
        }
      }
    },

    // 页面初始化从后端加载验证码
    created() {
      this.getVertifyCode()
    },

    //绑定事件
    mounted() {
      window.addEventListener('keydown', this.keyDown);
    },

    //销毁
    destroyed() {
      window.removeEventListener('keydown', this.keyDown, false);
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

  .el-input-group__append {
    padding: 0;
  }
</style>
