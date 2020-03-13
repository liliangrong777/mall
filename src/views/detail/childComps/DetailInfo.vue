<!-- 详细信息 -->
<template>
<div class='info-wrapper'>
  <div class="desc">
    <div class="start"></div>
    <div class="content">
      {{detailInfo.desc}}
    </div>
    <div class="end"></div>
  </div>
  <div class="info-title">穿着效果</div>
  <div>
      <img v-for="item in detailImg" 
      :src="item" 
      class="info-img"
      @load="imgLoad">
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
components: {},
data() {
  return {
    detailImg :[],
    len:0,
    count:0
  };
},
props:{
  detailInfo:{
    type:Object,
    default(){
      return {}
    }
  }

},
computed: {
  
},
//监控data中的数据变化
watch: {
  detailInfo(){
    this.len = this.detailInfo.detailImage[0].list.length
  }
},
methods: {
  imgLoad(){
    if(++this.count === this.len){
      this.$emit("imgLoad")
    }
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  
},
beforeUpdate(){
  this.detailImg = this.detailInfo.detailImage[0].list
}
}
</script>
<style  scoped>
.info-wrapper{
  padding: 10px 15px;
  border-bottom: 5px solid #eee;
}
.desc{
  padding: 15px 0;
}
.start::before{
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #222;
  float: left;
}
.end::after{
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #222;
  right: 0;
  bottom: 0;
}
.start,.end{
  width: 90px;
  height: 1px;
  background: #222;
  position: relative;
}
.end{
  float: right;
}
.content{
  font-size: 14px;
  padding: 15px;
}
.info-title{
  color: #222;
  font-size: 15px;
  padding: 10px 15px ;
}
.info-img{
  width: 100%;
}
</style>