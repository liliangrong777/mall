<!-- 购物车 -->
<template>
<div id='cart'>
  <nav-bar class="nav-nav">
    <div slot="center">购物街（{{$store.getters.cartCount}}）</div>
  </nav-bar>
  <scroll class="scroll">
    <cart-list/>
  </scroll>
  <button-bar />
</div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import ButtonBar from './childComps/ButtonBar'


export default {
  name:'Cart',
  components: {
    Scroll,
    NavBar,

    CartList,
    ButtonBar
  },
  data() {
    return {
    
   };
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
 
 },
}
</script>
<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    position: relative;
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    z-index: 9;
  }
  .scroll{
    height: cacl(100%);
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 93px;
    left: 0;
    right: 0;
  }

</style>