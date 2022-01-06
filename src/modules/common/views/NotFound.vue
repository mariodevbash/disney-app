<template>
  <a-result status="404" title="404" sub-title="Vaya... Parece que la pagina que buscas no existe.">
    <template #extra>
      <a-button type="primary" @click="backToHome">Regresar al inicio</a-button>
    </template>
  </a-result>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
    setup() {
        const router = useRouter();
        
        return{
            backToHome: () => {
                router.push({name: 'general-view'})
            }
        }
    },
}
</script>