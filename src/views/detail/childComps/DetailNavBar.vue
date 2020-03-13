<!-- navbar -->
<template>
  <nav-bar>
    <div slot="left" class="back" @click="$router.go(-1)">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="nav-bar">
      <div v-for="(item,index) in title" 
      class="nav-bar-item" 
      :class="{active:currentIndex===index}"
      @click="itemclick(index)">
        {{item}}
      </div>
    </div> 
  </nav-bar>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import NavBar from 'components/common/navbar/NavBar'
export default {
components: {
  NavBar
},
props:{
  title:{
    type:Array,
    default(){
      return []
    }
  },
},
data() {
  return {
  currentIndex:0,
  };
},
computed: {},
//监控data中的数据变化
watch: {},
methods: {
  itemclick(index){
    this.currentIndex=index
    this.$emit('navbarclick',index)
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style  scoped>
.nav-bar{
  display: flex;
}
.nav-bar-item{
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text)
}
.back img {
  margin-top: 12px;
}
</style>