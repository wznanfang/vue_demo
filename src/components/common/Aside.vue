<template>
  <div class="aside">
    <el-row class="tac">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1" @click="home()">
          <i class="el-icon-menu"></i>
          <span slot="title">首页管理</span>
        </el-menu-item>

        <el-submenu index="2">
          <template slot="title"><i class="el-icon-user"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="2-1">用户列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-tools"></i>后台管理</template>
          <el-menu-item-group>
            <el-menu-item index="3-1" @click="adminList()">管理员管理</el-menu-item>
            <el-menu-item index=" 3-2">权限管理</el-menu-item>
            <el-menu-item index="3-3">角色管理</el-menu-item>
            <el-menu-item index="3-4">操作日志</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      //跳转首页
      home() {
        this.$router.push({
          path: '/Home'
        })
      },
      //跳转管理员列表页面
      adminList() {
        this.$router.push({
          path: '/AdminList'
        })
      }
    }
  }
</script>

<style>
  .aside {
    width: 230px;
    float: left;
  }
</style>
