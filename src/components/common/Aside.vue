<template>
  <div class="aside">
    <el-container>
      <el-aside style="width: 12.625rem;">
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
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Aside",
  }
</script>

<style>
  .aside{
    width: 12.625rem;
    float: left;
  }
  .el-aside {
    background-color: #ffffff;
    color: #333;
  }
</style>
