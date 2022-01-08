<template>
  <div>
    <br />
    <a-row type="flex" justify="center" align="middle">
      <a-col>
        <span class="text-title text-center">Detalles del personaje</span>
      </a-col>
    </a-row>
    <br />
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
      <a-col
        :xs="24"
        :sm="24"
        :md="20"
        :lg="12"
        :xl="12"
        class="text-center"
        style="display: flex; flex-direction: row"
      >
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
        <div class="w-100">
          <a-collapse class="mt-1" accordion>
            <a-collapse-panel key="1" header="Aliados">
              <ul v-if="characterDetails?.allies.lenght">
                <li v-for="allie in characterDetails.allies" :key="allie">
                  {{ allie }}
                </li>
              </ul>
              <h3 v-else>El personaje no tiene aliados</h3>
            </a-collapse-panel>

            <a-collapse-panel key="2" header="Enemigos">
              <ul v-if="characterDetails?.enemies.lenght">
                <li v-for="enemy in characterDetails.enemies" :key="enemy">
                  {{ enemy }}
                </li>
              </ul>
              <h3 v-else>El personaje no tiene enemigos</h3>
            </a-collapse-panel>

            <a-collapse-panel key="3" header="Peliculas">
              <ul v-if="characterDetails?.films.length">
                <li v-for="film in characterDetails.films" :key="film">
                  {{ film }}
                </li>
              </ul>
              <h3 v-else>El personaje no aparece en peliculas</h3>
            </a-collapse-panel>

            <a-collapse-panel key="4" header="Parque de atracciones">
              <ul v-if="characterDetails?.parkAttractions.length">
                <li
                  v-for="parkAttracction in characterDetails.parkAttractions"
                  :key="parkAttracction"
                >
                  {{ parkAttracction }}
                </li>
              </ul>
              <h3 v-else>El personaje no aparece en parques de atracciones</h3>
            </a-collapse-panel>

            <a-collapse-panel key="5" header="Cortos de peliculas">
              <ul v-if="characterDetails?.shortFilms.length">
                <li
                  v-for="shortFilm in characterDetails.shortFilms"
                  :key="shortFilm"
                >
                  {{ shortFilm }}
                </li>
              </ul>
              <h3 v-else>El personaje no aparece en cortos de peliculas</h3>
            </a-collapse-panel>

            <a-collapse-panel key="6" header="Shows de TV">
              <ul v-if="characterDetails?.tvShows.length">
                <li v-for="tvShow in characterDetails.tvShows" :key="tvShow">
                  {{ tvShow }}
                </li>
              </ul>
              <h3 v-else>El personaje no aparece en shows de tv</h3>
            </a-collapse-panel>

            <a-collapse-panel key="7" header="Videojuegos">
              <ul v-if="characterDetails?.videoGames.lenght">
                <li
                  v-for="videogame in characterDetails.videoGames"
                  :key="videogame"
                >
                  {{ videogame }}
                </li>
              </ul>
              <h3 v-else>El personaje no aparece en videojuegos</h3>
            </a-collapse-panel>
          </a-collapse>
        </div>
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
