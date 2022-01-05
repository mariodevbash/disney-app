<template>
  <div>
    <br />
    <a-row type="flex" justify="center" align="middle">
      <a-col>
        <span class="text-center text-title">Personajes Generales</span>
      </a-col>
    </a-row>
    <br />
    <a-row type="flex" justify="space-around" align="middle" :gutter="[0, 48]">
      <a-col
        :xs="20"
        :sm="20"
        :md="11"
        :lg="7"
        v-for="character in allCharacters"
        :key="character._id"
      >
        <a-card hoverable>
          <template #cover>
            <div class="card__cover">
              <img
                :alt="character.name + 'image'"
                :src="character.imageUrl"
                class="card__image"
              />
            </div>
          </template>
          <a-card-meta :title="character.name" :description="character.url">
            <template #avatar>
              <a-avatar :src="character.imageUrl" />
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useCharacters from "@/modules/disney/composables/useCharacters";
export default defineComponent({
  name: "Home",

  setup() {
    const { getCharacters, loadingStatus, allCharacters } = useCharacters();

    getCharacters();

    return {
      loadingStatus,
      allCharacters,
    };
  },
});
</script>

<style scoped>
.card__cover{
    overflow: hidden;
}

.card__image {
  height: 300px;
  width: 100%;
  overflow: hidden !important;
  display: inline-flex;
  transition: transform 0.4s;
}

.ant-card:hover img {
  transform: scale(1.15);
  transform-origin: 50% 50%;
}
</style>
