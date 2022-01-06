import { createStore } from 'vuex'
import characters from '@/modules/disney/store/characters'
import ui from '@/modules/ui/store/ui'

const store = createStore({
  modules: {
    characters,
    ui
  }
})

export default store
