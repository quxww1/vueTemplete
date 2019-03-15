<template>
  <div id="app">
    <!-- //html结构 -->
    <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut">
      <router-view class="animated faster"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "App",
  mounted() {},
  computed: {},
  created() {
    document.body.removeChild(document.getElementById("Loading"));
  }
};
</script>
<style lang='scss'>
</style>
