<!-- 评论 -->
<template>
<div class='comment-wrapper'>
  <div class="header">
    <span>用户评价</span>
    <span class="more">更多 <i>></i></span>
  </div>
  <div class="content">
    <div class="user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" class="user-logo">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <p class="comment">
      {{commentInfo.content}}
    </p>
    <div class="goods-info">
      <span class="time">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
      <div class="img-box">
        <img v-for="item in commentInfo.images" :src="item" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import {formatDate} from 'common/utils.js'
export default {
components: {},
data() {
  return {
  };
},
props:{
  commentInfo:{
    type:Object,
    default(){
      return {}
    }
  }
},
filters:{
  showDate(value){
    let date = new Date(value*1000)
    return formatDate(date,"yyyy-MM-dd")
  }
},
computed: {
 
},
//监控data中的数据变化
watch: {
  
},
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeUpdate(){

}
}
</script>
<style  scoped>
i{
  color: #555;
  font-size: 16px;
}
.comment-wrapper{
  padding: 5px 12px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 15px;
  color: #111;
  background: #fff;
}
.header{
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
.more{
  margin-right: 10px;
}
.user{
  line-height: 45px;
  padding: 10px 0 5px;
}
.comment{
  color: #777;
  font-size: 14px;
}
.goods-info{
  color: #999;
  margin-top: 10px;
  padding: 0 5px 15px;
}
.time{
  padding-right: 5px;
}
.user-logo{
  height: 45px;
  width: 45px;
  vertical-align:middle;
  border-radius: 50%;
  margin-right: 10px;
}
.img-box{
  margin-top: 10px;
}
.img-box img{
  margin-right: 5px;
  width: 70px;
  height: 70px;
}
</style>