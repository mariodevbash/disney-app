<template>
  <Navbar />
  <router-view style="padding-top: 60px;" class="layout-background"/>
</template>

<script>
import Navbar from '@/modules/ui/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="less" scoped>
.layout-background {
  height: 100vh;
  background-color: var(--background-color);
  padding-top: 4em;
}
</style>
