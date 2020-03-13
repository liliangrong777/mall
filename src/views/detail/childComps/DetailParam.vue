<!-- 参数 -->
<template>
<div class='wraper'>
  <table v-for="table in paramInfo.sizes" class="size-table">
    <tr v-for="item in table">
      <td v-for="msg in item" >{{msg}}</td>
    </tr>
  </table>
  <table >
    <tr v-for="item in paramInfo.infos">
      <td class="td-key">{{item.key}}</td>
      <td class="td-value">{{item.value}}</td>
    </tr>
  </table>
  <div>
    <img :src="paramInfo.image" class="info-img">
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
components: {},
data() {
  return {
  
  };
},
props:{
  paramInfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
computed: {

},
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
table{
  width: 100%;
  border-collapse: collapse;
}
tr{
  height: 42px;
}
td{
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.wraper{
  font-size: 14px;
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
  background-color: #fff;
}
.size-table{
  border-bottom: 2px solid rgba(100,100,100,.2);
}
.td-key{
  width: 95px;
}
.td-value {
  color: #eb4868
}
.info-img{
  width: 100%;
}
</style>