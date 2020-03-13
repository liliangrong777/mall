<template>
    <div id="tab_bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style scoped>
#tab_bar{
    display: flex;
    flex-direction: center;
    justify-content: center;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100,.2);
    background: #f6f6f6;
  }
 
</style>