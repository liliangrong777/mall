<!-- 分类图标项 -->
<template>

  <div class="item-container">
    <div v-for=" (item,index) in subData" class="list" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
 components: {},
 data() {
   return {
    getSubcategories:[]
   };
 },
 props:{
   subData:{
     type:Array,
     default(){
       return []
     }
   }
 },
 computed: {
   
 },
 //监控data中的数据变化
 watch: {},
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
 
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
 
 },
 updated(){
    
 },
 methods: {
 
 },
}
</script>
<style scoped>

.item-container{
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-content: flex-start;
}
.list{
  width: 33%;
  padding: 10px 5px;
}
.list img{
  width: 50px;
  height: 50px;
}
.title{
  margin-top: 6px;
}
</style>