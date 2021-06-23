<template>
  <div class="main">
    <el-container>
      <el-main>
        <el-button @click="getButtonClick()">{{text || '确认'}}</el-button>

      </el-main>
    </el-container>
  </div>
</template>

<script>

  export default{
    name:"Main",
    props:["text"], //父组件传给子组件的值
    data() {
      return{
        msg:"再点就炸啦！！！"
      };
    },
    methods:{
      getButtonClick(){
        console.log(this.msg)
        this.$emit("message",this.msg); //点击按钮时，子组件向父组件传值
      }
    }
  };
</script>

<style>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 49.5rem;
  }

</style>
