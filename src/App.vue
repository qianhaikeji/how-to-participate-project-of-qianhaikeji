<template>
  <div id="app">
    <Shell/>
  </div>
</template>

<script>
import Shell from './views/layout/Shell'
export default {
  components: {
    Shell
  }
}
</script>

<style>
* {
  -webkit-text-size-adjust:none;
  padding:0px;
  margin:0px;
  font-family: "PingHei","Helvetica Neue","Helvetica","STHeitiSC-Light","Arial","Microsoft YaHei",sans-serif;
  outline:none;
  -webkit-tap-highlight-color:rgba(0,0,0,0);
  box-shadow: none;
  -webkit-box-shadow:none;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background: white;
}

li {
  list-style: none;
}

.text-ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.cursor-pointer {
  cursor: pointer;
}
</style>