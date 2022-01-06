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
      <a-row type="flex" justify="center" align="middle" :gutter="[16, 48]">
        <a-col
          :xs="20"
          :sm="11"
          :md="7"
          :lg="5"
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
import { defineComponent, h, ref } from "vue";
import { useRouter } from "vue-router";
import { LoadingOutlined } from "@ant-design/icons-vue";
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
    const { getCharacters, loadingStatus, allCharacters, perPage, totalItems } =
      useCharacters();

    const currentPage = ref(1);

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
.card__cover {
  overflow: hidden;
}

.card__image {
  height: 250px;
  width: 100%;
  overflow: hidden !important;
  display: inline-flex;
  transition: transform 0.4s;
}

.card__description {
  overflow-wrap: break-word;
}

.ant-card:hover img {
  transform: scale(1.15);
  transform-origin: 50% 50%;
}

.pagination__fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  bottom: 3em;
}
</style>
