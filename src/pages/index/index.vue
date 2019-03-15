<template>
    <div>
        首页
    </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    //禁用本页滚动条
    document.body.parentNode.style.overflow = "hidden";
  },
  methods: {
  },
  computed: {
  },
  components: {
  }
};
</script>
<style lang="scss" scoped>

</style>
