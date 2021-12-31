<template>
  <a-menu mode="horizontal">
    <a-menu-item key="personajes">
      <router-link :to="{ name: 'Home' }" active-class="red">
        <ion-icon name="people-outline"></ion-icon>
        Personajes
      </router-link>
    </a-menu-item>
    <a-menu-item key="about">
      <router-link :to="{ name: 'About' }" active-class="red">
        <ion-icon name="search-outline"></ion-icon>
        Buscar Personaje
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute()
    const current = ref([route.path]);
    return {
      current,
    };
  },
});
</script>

<style scoped>
.red{
    color: var(--main-color);
}
</style>
