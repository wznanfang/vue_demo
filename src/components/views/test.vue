<!--测试级联组件渲染数据-->
<template>
  <div class="dashboard-container">
    <el-cascader style="width:450px" :props="props" placeholder="请选择..." filterable clearable ref="demoCascader"
      @change="handChange" />
  </div>
</template>


<script>
  export default {
    data() {
      return {
        props: {
          multiple: true,
          checkStrictly: true,
          lazy: true,
          lazyLoad: this.lazyLoad
        }
      }
    },

    methods: {

      handChange(value) {
        if (value != undefined && value.length > 0) {
          // 获取value值
          console.log("---------------------------")
          console.log(value)
          // console.log(this.$refs["demoCascader"].getCheckedNodes()[0].value)
          // 获取label 值
          // console.log(this.$refs["demoCascader"].getCheckedNodes()[0].label)
          let storeIds = [];
          value.forEach(val => {
            val.forEach(v => {
              if (storeIds.indexOf(v) < 0) {
                storeIds.push(v)
              }
            })
          })
        }
      },
      lazyLoad(node, resolve) {
        setTimeout(() => {
          this.getStore(node, resolve)
        }, 0.1)
      },

      getStore(node, resolve) {
        let access_token =
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2Mjg5MTQwMjEsImxvZ2luX3VzZXJfa2V5IjoiNWFiOTgxMDUtODNmNy00OWI3LWI2OWUtMzEzZTI3MTgyNzQ0In0.Y8dUjpNUwuiuO-jYiQYfWINneEtRqdXBJJDZMR_QDJEk3oDdQDO5P_vYh72XKmTZ3mWRCJ8QHfI5-lGab5bCLg";
        this.$axios.get('/api/system/store/findByParentId', {
          headers: { //头部参数
            'Authorization': access_token
          },
          params: {
            storeId: node.level == 0 ? node.level : node.value
          }
        }).then(result => {
          console.log(result)
          if (result.data.data.length > 0) {
            let nodes = result.data.data;
            nodes.forEach(item => {
              if (node.level > 0) {
                item.leaf = true
              }
            })
            resolve(nodes)
          } else {
            resolve(null)
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  };
</script>
