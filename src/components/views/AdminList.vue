<template>
  <div class="adminList">
    <Header></Header>
    <Aside></Aside>
    <!-- <p v-for="admin in AdminData" v-bind:fData="admin">{{ admin.id }}{{admin.username}}</p> -->
    <!-- <Main v-for="admin in AdminData" v-bind:fData="admin"></Main> -->


    <template>
      <el-table ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange" stripe border
        :data="AdminData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="phone" label="手机号" width="180"></el-table-column>
        <el-table-column prop="enabled" label="是否激活" width="180"></el-table-column>
        <el-table-column prop="lastLoginIp" label="最后一次登录地址" width="180"></el-table-column>
        <el-table-column prop="lastLoginTime" label="最后一次登录时间" width="180"></el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="updatedAt" label="修改时间" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>



  </div>

</template>

<script>
  import Header from "../common/Header.vue";
  import Aside from "../common/Aside.vue";
  import Main from "../common/Main.vue";
  import {getLocalTime} from '../util/Date.js'

  export default {
    name: 'AdminList',

    components: {
      Header,
      Aside,
      Main,
    },

    data() {
      return {
        AdminData: [],
      }
    },

    // 页面初始化从后端加载数据
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
          this.AdminData = result.data.result.content
          console.log(this.AdminData)
          this.AdminData.forEach(adminData => {
            adminData.enabled = adminData.enabled = 0 ? "否" : "是"
            adminData.lastLoginTime = getLocalTime(adminData.lastLoginTime)
            adminData.createdAt = getLocalTime(adminData.createdAt)
            adminData.updatedAt = getLocalTime(adminData.updatedAt)
          })
        }).catch(err => {
          console.log(err)
        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },





  }
</script>

<style>
</style>
