<!-- 详情页轮播 -->
<template>
    <swiper class="detail-swiper" v-if="topImages.length">
      <swiper-item  v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import{Swiper, SwiperItem} from 'components/common/swiper'
export default {
components: {
  Swiper, 
  SwiperItem
},
data() {
  return {
  
  };
},
props:{
  topImages:{
    type:Array,
    default(){
      return []
    }
  }
},
computed: {},
//监控data中的数据变化
watch: {},
methods: {

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
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>