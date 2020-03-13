<!-- 详情页 -->
<template>
<div class='detail-box' >
  <detail-nav-bar :title="titles" 
  class="detail-nav" 
  @navbarclick="barclick"
  ref="nav"/>
  <scroll class="detail-scroll" ref="scroll" 
  @scroll="scroll" :probeType="3" 
  :currentIndex="currentIndex">
    <detail-swiper :topImages="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop :shop="shop"/>
    <detail-info :detailInfo="detailInfo" 
    @imgLoad="loadOver"/>
    <detail-param :paramInfo="paramInfo" ref="param"/>
    <detail-comment :commentInfo='commentInfo' ref="comment"/>
    <detail-recommend/>
    <GoodsList :goods="recommendList" ref="recommend" class="recommend"/>
  </scroll>
  <detail-bottom-bar @add="addToCart" />
  <back-top v-show="isShow" @click.native="backclick" />
  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/BackTop'

import {getDetailData,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils.js'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShop from './childComps/DetailShop'
import DetailInfo from './childComps/DetailInfo'
import DetailParam from './childComps/DetailParam'
import DetailComment from './childComps/DetailComment'
import DetailRecommend from './childComps/DetailRecommend'
import DetailBottomBar from './childComps/DetailBottomBar'

export default {
name: "Detail",
//import引入的组件需要注入到对象中才能使用
components: {
  Scroll,
  GoodsList,
  BackTop,

  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShop,
  DetailInfo,
  DetailParam,
  DetailComment,
  DetailRecommend,
  DetailBottomBar
},
data() {
  //这里存放数据
  return {
    iid:null,
    titles: ['商品', '参数', '评论', '推荐'],
    topImages: [],
    goods: {},
    shop: {},
    detailInfo: {},
    paramInfo: {}  ,
    commentInfo:{},
    recommendList: [],
    themeTops: [],
    currentIndex: 0,
    saveY:null,
    isShow:false
  };
},
computed: {},
//监控data中的数据变化
watch: {
  imgLoad(){

  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  this.iid = this.$route.params.iid;
  getDetailData(this.iid).then(res=>{
    const data = res.result;
    this.topImages = data.itemInfo.topImages
    //获取商品信息
    this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    this.shop = new Shop(data.shopInfo)
    this.detailInfo = data.detailInfo;
    this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    if (data.rate.list) {
      this.commentInfo = data.rate.list[0];
    }
  })
  getRecommend().then((res,err)=>{
    if(err) return
    this.recommendList = res.data.list
  })

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
 /*  const refresh = debounce(this.$refs.scroll.refresh,50)
  this.$bus.$on('detailImageLoad',()=>{
    //this.$refs.scroll.refresh()
    refresh()
  }) */
  
},
updated() {
    this.$refs.scroll.refresh()
    this.saveY = [0];
    this.saveY.push(this.$refs.param.$el.offsetTop)
    this.saveY.push(this.$refs.comment.$el.offsetTop)
    this.saveY.push(this.$refs.recommend.$el.offsetTop-45)
    this.saveY.push(Number.MAX_VALUE)
}, 

//方法集合
  methods: {
    loadOver(){
      this.$refs.scroll.refresh()
    },
    barclick(index){
      this.$refs.scroll.scrollTo(0,-this.saveY[index],100)
    },
    backclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    scroll(position){
      let p = -position.y;
      //返回顶部按钮的展示
      this.isShow = p>1000
      //代码不臃肿，bug注意，迭代中的i是字符串类型
        for(let i in this.saveY){
          if(this.$refs.nav.currentIndex!=i){
            if(p>=this.saveY[i] && p<this.saveY[i*1+1]){
              this.$refs.nav.currentIndex=i*1
            }
          }
        }
      },
    addToCart(){  
      // 1.创建对象
      const obj = {}
      // 2.对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0]
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.realPrice;
      // 3.添加到Store中
      this.$store.commit('addCart', obj)
    },
  },
}

</script>
<style  scoped>
.detail-box{
  position: relative;
  background: #fff;
  z-index: 9;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-scroll{
  position: relative;
  height: calc(100% - 44px);
  touch-action: none;
}
.recommend{
  padding-bottom: 58px;
}
</style>