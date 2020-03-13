<template>
  <div id="home" class="warpper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <TabControl
      :titles="['流行', '新款', '精选']"
      @tabclick="tabclick"
      ref="tabControle1"
      class="tabControle1"
      v-show="isFixed"
    />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="backIsShow"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <swiper-content :banners="banners" @imgLoadOver="imgLoadOver" />
      <recommend :recommends="recommends" />
      <FeatureView />
      <TabControl :titles="['流行', '新款', '精选']" @tabclick="tabclick" ref="tabControle2" />
      <goods-list :goods="showGoods" />
    </Scroll>
    <back-top @click.native="backclick" v-show="isShow" />
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import { debounce } from 'common/utils'
import { getHomeMultidata, getHomeGoods } from 'network/home'

import NavBar from 'components/common/navbar/NavBar'
import SwiperContent from './childComps/SwiperContent'
import Recommend from './childComps/Recommend'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/BackTop'

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false,
      isFixed: false,
      tabOffsetTop: 0,
      leavePosition: 0
    }
  },
  components: {
    Scroll,
    NavBar,
    SwiperContent,

    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop
  },
  created() {
    //请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('homeImageLoad', () => {
      refresh()
    })
  },
  activated() {
    //console.log(this.leavePosition)
    //this.$refs.scroll.scrollTo(0,this.leavePosition,0)
    //this.$refs.scroll.refresh()
  },
  deactivated() {
    this.leavePosition = this.$refs.scroll.scroll.y
  },
  methods: {
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControle2.currentIndex = index
      this.$refs.tabControle1.currentIndex = index
    },
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    backclick() {
      //$refs获取子组件
      this.$refs.scroll.scrollTo(0, 0)
    },
    backIsShow(position) {
      this.isFixed = -position.y > this.tabOffsetTop
      this.isShow = -position.y > 1000
    },
    loadmore() {
      this.getHomeGoods(this.currentType)
    },
    imgLoadOver() {
      this.tabOffsetTop = this.$refs.tabControle2.$el.offsetTop
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.tabControle1 {
  position: relative;
  background: #fff;
  z-index: 999;
}
</style>