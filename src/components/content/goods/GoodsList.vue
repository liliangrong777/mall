<template>
  <div class="goods">
    <goods-list-item 
    v-for = "item in goods "
    :goods-list = 'item'/>
  </div>

</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
  name:"GoodsList",
  components:{
    GoodsListItem
  },
  data(){
    return {
    
    }
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    },

  },
  computed:{
   
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

  }
</style>