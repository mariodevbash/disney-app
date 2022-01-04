<template>
  <a-layout-header class="header__body">
    <div class="nav-header-title">
      <img src="@/assets/images/png/disney_logo.png" alt="Logo" width="60" />
      <span class="text-headline ml-1 text-white">Disney</span>
    </div>

    <a-menu class="menu-nav text-body1" mode="horizontal" theme="light">
      <a-menu-item key="personajes">
        <router-link :to="{ name: 'Home' }">
          <ion-icon name="person"></ion-icon>
          Personajes
        </router-link>
      </a-menu-item>
      <a-menu-item key="about">
        <router-link :to="{ name: 'About' }">
          <ion-icon name="search"></ion-icon>
          Buscar Personaje
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const current = ref([route.path]);
    return {
      current,
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
