<template>
  <a-layout class="layout-background">
    <Navbar />
    <a-layout-content class="prevent-overflow-y" style="padding-top: 63px; padding-bottom: 60px;">
      <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
              <component :is="Component" />
          </transition>
      </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from "@/modules/ui/components/navigation/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>
