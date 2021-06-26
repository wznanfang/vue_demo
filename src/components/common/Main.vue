<template>
  <div class="main">
    <el-container>
      <el-main>
        {{fData}}
      </el-main>
    </el-container>
  </div>
</template>

<script>

  export default{
    name:"Main",
    props: ['fData'],
    data(){
      return{

      }
    },
  };

</script>

<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }

</style>
