<!-- 推荐 -->
<template>
<div class='detail-recommend'>
  <span class="info-header">热门推荐</span>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
data() {
  return {
  
  };
},
props:{

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
.detail-recommend{
  padding: 5px;
}
.info-header{
  padding-left: 8px;
  line-height: 40px;
  font-size: 15px;
  color: #333;
}
</style>