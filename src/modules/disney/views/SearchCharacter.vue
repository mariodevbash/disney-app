<template>
  <div>
    <br />
    <a-row type="flex" justify="center" align="middle">
      <a-col>
        <span class="text-title text-center">Detalles del personaje</span>
      </a-col>
    </a-row>
    <br />
    <a-row type="flex" justify="space-around">
      <a-col :xs="20" :sm="20" :md="20" :lg="9" :xl="9" class="text-center">
        <span>Escribe el id del personaje</span>
        <a-form
          :model="form"
          name="characterForm"
          layout="vertical"
          class=""
          autocomplete="off"
          @finish="getCharacterDetails"
          @finishFailed="fetchError"
        >
          <a-form-item
            name="characterId"
            :rules="[{ required: true, message: 'Ingresa un id de personaje' }]"
          >
            <a-input class="mt-1" v-model:value="form.characterId" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit">Buscar</a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :xs="20" :sm="20" :md="5" :lg="5" :xl="5" class="text-center">
        <a-spin :spinning="loadingStatus" :indicator="indicator">
          <a-card hoverable>
            <template #cover>
              <div class="card__cover">
                <img
                  :alt="characterDetails.name"
                  :src="characterDetails.imageUrl"
                  class="card__image"
                />
              </div>
            </template>
            <a-card-meta
              :title="characterDetails.name"
              :description="characterDetails.url"
              class="card__description"
            >
              <template #avatar>
                <a-avatar :src="characterDetails.imageUrl" />
              </template>
            </a-card-meta>
          </a-card>
        </a-spin>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { onMounted, reactive, h } from "vue";
import { useRoute } from "vue-router";
import useCharacters from "@/modules/disney/composables/useCharacters";
import useMenus from "@/modules/ui/composables/useMenus";
import { LoadingOutlined } from "@ant-design/icons-vue";

export default {
  setup() {
    const route = useRoute();
    const { setActiveMenu, clearActiveMenu } = useMenus();
    const { getCharacterDetails, characterDetails, loadingStatus } =
      useCharacters();

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: "64px",
      },
      spin: true,
    });

    getCharacterDetails({
      characterId: route.params.id,
    });

    onMounted(() => {
      clearActiveMenu();
      setActiveMenu(route.meta.key);
    });

    const form = reactive({
      characterId: "",
    });

    form.characterId = route.params.id;

    //TODO: Poner notificacion de error y desplegar los demas datos
    const fetchError = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    return {
      form,
      getCharacterDetails,
      characterDetails,
      fetchError,
      loadingStatus,
      indicator,
    };
  },
};
</script>

<style></style>
