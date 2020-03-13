<template>
  <div class="goods-list-item" @click="itemclick">
    <img v-lazy="showImg" alt @load="imageLoad" />
    <div class="goods-info">
      <p>{{goodsList.title}}</p>
      <span class="price">{{goodsList.price}}</span>
      <span class="collect">{{goodsList.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.includes('/home')) {
        this.$bus.$emit('homeImageLoad')
      } else if (this.$route.path.includes('/detail')) {
        this.$bus.$emit('detailImageLoad')
      } else {
        this.$bus.$emit('categoryImageLoad')
      }
    },
    itemclick() {
      this.$router.push('/detail/' + this.goodsList.iid)
    }
  },
  computed: {
    showImg() {
      return (
        this.goodsList.image || this.goodsList.img || this.goodsList.show.img
      )
    }
  }
}
</script>

<style scoped>
.goods-list-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  text-align: center;
  font-size: 12px;
  position: absolute;
  left: 0;
  bottom: 5px;
  right: 0;
  overflow: hidden;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: red;
  padding-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -14px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>