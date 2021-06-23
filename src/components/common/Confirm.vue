<template>
  <div class="confirm-button">
    <el-button @click="getButtonClick()">{{text || '确认'}}</el-button>
  </div>
</template>

<script>
  export default{
    name:"confirm-button",
    props:["text"], //父组件传给子组件的值
    data() {
      return{
        msg:"再点就炸啦！！！"
      };
    },
    methods:{
      getButtonClick(){
        this.$emit("message",this.msg); //点击按钮时，子组件向父组件传值
      }
    }
  };
</script>

<style>
  
</style>
