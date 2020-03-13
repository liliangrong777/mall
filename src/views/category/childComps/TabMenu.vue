<!-- 选项菜单 -->
<template>
<div id='tab-menu'>
  <scroll class="menu-scroll">
    <ul class="menu-box">
      <li v-for="(item,index) in list" 
      class="menu-list"
      :class="{active:currentIndex===index}"
      @click="menuliclick(index)">
        {{item.title}}
      </li>
    </ul>
  </scroll>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import Scroll from 'components/common/scroll/Scroll'
export default {
 components: {
   Scroll
 },
 data() {
   return {
    currentIndex:0
   };
 },
 props:{
   list:{
     type:Array,
     default(){
       return []
     }
   }
 },
 computed: {},
 //监控data中的数据变化
 watch: {},
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
 
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
 
 },
 methods: {
   menuliclick(index){
     this.currentIndex = index;
     this.$emit('menuclick',index)
   }
 },
}
</script>
<style scoped>
.menu-scroll{
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
.menu-box{
  text-align: center;
  color: #333;
  font-size: 14px;
}
.menu-list{
  background: #eee;
  height: 45px;
  line-height: 45px;
}
.active{
  background: #fff;
  font-weight: 700;
  color: var(--color-high-text);
  border-left: 3px solid var(--color-high-text);
}
</style>