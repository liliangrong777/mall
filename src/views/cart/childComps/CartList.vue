<!-- 商品项 -->
<template>
<div class='cart-container'>
  <div v-for="item in goods" class="goods-container">
    <div >
      <img src="~/assets/img/cart/tick.svg" alt=""
       class="check-button"
       :class="{check:item.isChecked}"
       @click="item.isChecked = !item.isChecked">
    </div>
    <div class="goods-left">
      <img :src="item.imgURL" alt="" 
      >
    </div>
    <div class="goods-right">
      <div class="title">{{item.title}}</div>
      <div class="desc">商品描述：{{item.desc}}</div>
      <div >
        <span class="price">￥{{item.newPrice}}</span>
        <span class="count">x{{item.count}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
 components: {},
 data() {
   return {
    
   }
 },
 computed: {
  goods(){
     return this.$store.state.cartData
   } 
 },
 //监控data中的数据变化
 watch: {},
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
 
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
 
 },
 methods: {
   
 },
}
</script>
<style scoped>
.goods-container{
  padding: 5px;
  border-bottom: 1px solid rgb(153, 152, 152 ,0.5);
  display: flex;
}
.goods-left{
  padding: 5px;
}
.goods-left>img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.goods-right{
  padding: 5px 10px ;
  overflow: hidden;
  white-space: nowrap;
  
}
.title,.desc{
  overflow: hidden;
  text-overflow: ellipsis; 
}
.title{
  color: #333;
  font-size: 17px;
}
.desc{
  margin-top: 15px;
  font-size: 14px;
  color: #666;
  
}
.goods-right div:last-child{
  margin-top:15px; 
  display: flex;
  justify-content: space-between;
  line-height: 29px;
}
.price{
  color: #ff4500;
}
.check-button{
  vertical-align: middle;
  border-radius: 50%;
  position: relative;
  top: 50%;
  margin-top: -20px;
  border: 2px solid #ff8198;
}
.check{
  background: #ff8198;
}
</style>