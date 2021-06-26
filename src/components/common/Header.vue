<template>
  <div class="header">
    <el-container>
      <el-header>
        <h4 class="nanfeng">南风落尽</h4>
        <p class="loginOut">
          <el-button type="primary" icon="el-icon-switch-button" circle @click="loginOut()" title="退出"></el-button>
        </p>
      </el-header>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Header",

    data() {
      return {}
    },

    methods: {
      loginOut() {
        let access_token = JSON.parse(sessionStorage.getItem("userInfo")).token.access_token;
        this.$axios.get('/api/common/loginOut', {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'bearer ' + access_token
            },
            params: {
              accessToken: access_token
            },
          })
          .then(result => {
            console.log(result.data);
            if (result.data.code === 0) {
              this.$message({
                message: '退出成功！',
                type: 'success'
              });
              //退出成功后跳转达到登录页面
              this.$router.push({
                path: '/Login'
              })
            } else {
              this.$message({
                message: result.data.message,
                type: "error"
              });
            }
          }).catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #55aaff;
    color: #333;
    text-align: center;
    line-height: 4rem;
  }

  .nanfeng {
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
