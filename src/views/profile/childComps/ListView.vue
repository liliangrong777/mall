<template>
  <div class="bt10 fs18">
    <div v-for="(item, index) in listData" :key="index" class="lineList">
      <i class="iconfont ml15 fs16" :class="item.icon" :style="{color:item.iconColor}"></i>
      <div class="info ml15">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView',
  props: {
    listData: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.lineList {
  display: flex;
  height: 30px;
  line-height: 30px;
}
.lineList .iconfont {
  font-size: 16px;
}
.lineList div {
  width: 100%;
  border-top: 1px solid #eee;
}
</style>
