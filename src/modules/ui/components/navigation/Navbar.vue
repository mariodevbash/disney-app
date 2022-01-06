<template>
  <a-layout-header class="header__body">
    <div class="nav-header-title">
      <img src="@/assets/images/png/disney_logo.png" alt="Logo" width="60" />
      <span class="text-headline ml-1 text-white">Disney</span>
    </div>

    <a-menu
      :selectedKeys="current"
      class="menu-nav text-body1"
      mode="horizontal"
      theme="light"
    >
      <a-menu-item v-for="menu in menus" :key="menu.key">
        <router-link :to="{ name: menu.routeName }">
          <ion-icon :name="menu.icon"></ion-icon>
          {{ menu.name }}
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import useMenus from "@/modules/ui/composables/useMenus";

export default defineComponent({
  setup() {
    const route = useRoute();
    const { menus } = useMenus();

    // TODO: Terminar el estado del navbar para guardar el estado  

    const current = ref([`${route.meta.key}`]);
    return {
      current,
      menus,
    };
  },
});
</script>

<style lang="less" scoped>
.header__body {
  align-items: stretch;
  background: var(--main-color);
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: nowrap;
  font-family: "OS Regular";
  justify-content: space-between;
  padding: auto 1em;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.nav-header-title {
  display: flex;
  align-items: center;
  margin-right: 1em;
}

.menu-nav {
  width: 75%;
  margin: 0 auto;
  border: 0;
  background: var(--main-color);
  justify-content: flex-start;
}
</style>
