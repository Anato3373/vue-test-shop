import Vue from 'vue'
import Vuex from 'vuex'
import createProd from './modules/createProd'
import forCart from './modules/forCart'

Vue.use(Vuex)


const store = new Vuex.Store({
  namespaced: true,
  modules: {
    createProd,
    forCart
  }
})

export default store