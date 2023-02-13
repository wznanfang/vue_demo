<template>
  <div class="adminList">
    <Header></Header>
    <Aside></Aside>
    <el-main>
      <el-table ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange" stripe border :data="AdminData">
        <el-table-column type="selection" width="55"></el-table-column>
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
            <el-button size="mini" type="danger" @click="handleFreeze(scope.$index, scope.row.id)">冻结</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>

  </div>
</template>

<script>
import Header from "../common/Header.vue";
import Aside from "../common/Aside.vue";
import Main from "../common/Main.vue";
import {getLocalTime} from '../../util/DateUtil.js'

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


    //修改
    handleEdit(index, row) {
      // console.log(index, row);
    },


    //冻结
    handleFreeze(index, row) {
      console.log(index, row);
      let access_token = JSON.parse(sessionStorage.getItem("userInfo")).token.access_token;
      this.$axios.post('/api/back/admin/freeze', {
        id: row
      }, {
        headers: { //头部参数
          'Authorization': 'bearer ' + access_token
        }
      },).then(result => {
        console.log(result)
        if (result.data.code === 0) {
          this.$message({
            message: result.data.message,
            type: 'success'
          });
        } else {
          this.$message({
            message: result.data.message,
            type: "error"
          });
        }
      }).catch(err => {
        console.log(err)
      })
    },


    //多选
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    }
  },


}
</script>

<style>
</style>
