<template>
  <div>
    <swiper>
      <swiper-item 
      v-for="item in banners">
        <a :href="item.link">
        <img :src="item.image"  @load="loadOver">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import{Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:'SwiperContent',
  props:{
    banners:{
      type:Array,
      dafault(){
        return []
      }
    }
  },
  data(){
    return {
      isLode:false
    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods:{
    loadOver(){
      if(!this.isLode){
        this.$emit("imgLoadOver")
        this.isLode = true
      }
      
    }
  }
}
</script>

<style>

</style>