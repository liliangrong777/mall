<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tar-bar />
  </div>
</template>

<script>
import MainTarBar from 'components/content/MainTarbar'
export default {
  name: 'app',
  components: {
    MainTarBar
  }
}
</script>

<style>
@import url('assets/css/base.css');
@import url('//at.alicdn.com/t/font_1630444_8f8ycqejzci.css');
</style>
