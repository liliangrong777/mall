<template>
  <div id="recommend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link" class="item">
        <img :src="item.image" alt />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
#recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
#recommend .item {
  flex: 1;
}
#recommend .item img {
  height: 70px;
  width: 70px;
}
</style>