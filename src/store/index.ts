import { createStore } from 'vuex'
import about from './pages/about'

export default createStore({
  state: {
    user: 'Song Zhou'
  },
  mutations: {
    changeUserName(state: any, name: string) {
      state.user = name
    }
  },
  actions: {},
  modules: {
    about
  }
})
