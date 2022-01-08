<template>
  <div>
    <a-spin
      :spinning="loadingStatus"
      :indicator="indicator"
      class="spinner__full-screen"
    >
      <br />
      <a-row type="flex" justify="center" align="middle">
        <a-col>
          <span class="text-center text-title">Personajes Generales</span>
        </a-col>
      </a-row>
      <br />
      <a-pagination
        :current="currentPage"
        :pageSize="perPage"
        :total="totalItems"
        @change="onChange"
        showLessItems
        class="pagination__fixed"
      />
      <a-row type="flex" justify="center" align="middle" :gutter="[24, 48]">
        <a-col
          :xs="20"
          :sm="11"
          :md="7"
          :lg="5"
          :xl="4"
          v-for="character in allCharacters"
          :key="character._id"
        >
          <a-card hoverable @click="goToSearch(character._id)">
            <template #cover>
              <div class="card__cover">
                <img
                  :alt="character.name + 'image'"
                  :src="character.imageUrl"
                  class="card__image"
                />
              </div>
            </template>
            <a-card-meta
              :title="character.name"
              :description="character.url"
              class="card__description"
            >
              <template #avatar>
                <a-avatar :src="character.imageUrl" />
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </a-spin>
  </div>
</template>

<script>
import { defineComponent, h, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { LoadingOutlined } from "@ant-design/icons-vue";
import useMenus from "@/modules/ui/composables/useMenus";
import useCharacters from "@/modules/disney/composables/useCharacters";
export default defineComponent({
  name: "Home",
  setup() {

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "64px",
      },
      spin: true,
    });

    const router = useRouter();
    const { getCharacters, loadingStatus, allCharacters, perPage, totalItems } = useCharacters();
    const { setActiveMenu, clearActiveMenu } = useMenus()
    const route = useRoute()

    const currentPage = ref(1);

    onMounted(() => {
      clearActiveMenu()
      setActiveMenu(route.meta.key)
    })

    getCharacters(currentPage.value);

    return {
      loadingStatus,
      allCharacters,
      indicator,
      perPage,
      currentPage,
      totalItems,
      onChange: (page) => {
        currentPage.value = page;
        getCharacters(currentPage.value);
      },
      goToSearch: (character_id) => {
        router.push({ name: "search-character", params: { id: character_id } });
      },
    };
  },
});
</script>

<style scoped>
.pagination__fixed {
  background: var(--main-color);
  border-radius: 6px;
  padding: 10px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  bottom: 3em;
  box-shadow: 3px 5px 4px 1px rgba(0, 0, 0, 0.5);
}
</style>
