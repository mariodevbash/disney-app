import { createStore } from 'vuex'
import characters from '@/modules/disney/store/characters'

const store = createStore({
  modules: {
    characters
  }
})

export default store
