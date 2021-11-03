interface AboutStates {
  items: any[]
  checkoutStatus: boolean | null
}

const state: () => AboutStates = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {
  getCheckoutStatus: (state: AboutStates, getters: any, rootState: any) => {
    console.log('%c 🥓 state: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', state);
    console.log('%c 🥘 getters: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', getters);
    console.log('%c 🥧 rootState: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', rootState);
    return state.checkoutStatus
  }
}

const mutations = {
  updateCheckoutStatus: (state: AboutStates, payload: boolean) => {
    state.checkoutStatus = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
