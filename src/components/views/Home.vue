<template>
  <div class="home">

    <el-container>
      <el-header>
          <h4 class="nanfeng">南风落尽</h4>
        <p class="loginOut">
          <router-link to="/login">退出</router-link>
        </p>
      </el-header>

      <el-container>
        <el-aside style="width: 15.625rem;">
          <el-menu default-active="1">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-menu"></i>首页管理</template>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title"><i class="el-icon-user"></i>用户管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title"><i class="el-icon-s-tools"></i>后台管理</template>
              <el-menu-item-group>
                <el-menu-item index="3-1">管理员管理</el-menu-item>
                <el-menu-item index="3-2">权限管理</el-menu-item>
                <el-menu-item index="3-3">角色管理</el-menu-item>
                <el-menu-item index="3-4">操作日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-aside>

        <el-container>
          <el-main>内容</el-main>

          <el-footer>
            copyRight@南风落尽
          </el-footer>

        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
  }
</script>

<style>
  .el-header,
  .el-footer {
    background-color: #55aaff;
    color: #333;
    text-align: center;
    line-height: 3.75rem;
  }

  .el-aside {
    background-color: #ffffff;
    color: #333;
    line-height: 48.6rem;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 48.6rem;
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
