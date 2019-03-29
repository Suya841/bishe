<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body,
  html,
  div,
  h4,
  h5 {
    margin: 0;
    padding: 0;
  }

#app {
  background-color: #fafafa;
}
</style>
