<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="slot-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="slot-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="slot-icon" src="~assets/img/tabbar/category.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/category_active.svg" />
        <div slot="slot-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="slot-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/shopcart_active.svg" />
        <div slot="slot-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="slot-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="slot-icon-active" src="~assets/img/tabbar/profile_active.svg" />
        <div slot="slot-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from 'components/common/tarbar/TabBarItem'
import TabBar from 'components/common/tarbar/TarBar'
export default {
  name: 'MainTarBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>