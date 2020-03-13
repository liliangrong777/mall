<!--  -->
<template>
<div class=''>
  <div class="buttom-wrapper">
    <div class="check-box">
      <img src="~/assets/img/cart/tick.svg" alt=""
       class="check-button"
       :class="{check:isChecked}"
       @click="checkAll">
       全选
    </div>
    <div class="price-box">合计:￥{{$store.getters.totalPrice}}</div>
    <div class="button-box">去计算({{$store.getters.cartCount}})</div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）

export default {
 components: {},
 data() {
   return {
    isChecked:true
   };
 },
 computed: {
   
 },
 //监控data中的数据变化
 watch: {
   
     
   
 },
 beforeUpdate(){
   this.isChecked =  this.$store.state.cartData.every(item=>item.isChecked)
 },
 //生命周期 - 创建完成（可以访问当前this实例）
 created() {
 
 },
 //生命周期 - 挂载完成（可以访问DOM元素）
 mounted() {
 
 },
 updated(){
  
    
   
 },
 methods: {
   checkAll(){
     this.$store.state.cartData.forEach(item=>{
       item.isChecked = !this.isChecked
     })
   }
 },
}
</script>
<style scoped>
.buttom-wrapper{
  text-align: center;
  height: 44px;
  width: 100%;
  line-height: 44px;
  font-size: 14px;
  background: #eee;
  position: fixed;
  bottom: 49px;
}
.buttom-wrapper>div{
  display: inline-block;
}
.check-box{
  color: #888;
  width: 24%;
}
.check-button{
  vertical-align: middle;
  border-radius: 50%;
  border: 2px solid #ff8198;
  margin-left: 5px;
}
.check{
  background: #ff8198;
}
.price-box{
  width: 46%;
  font-size: 17px;
  color: #333;
}
.button-box{
  width: 30%;
  background: #f40;
  color: #fff;
}
</style>