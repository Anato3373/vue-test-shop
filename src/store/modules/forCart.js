export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: {
   ADD_TO_CART(state, product) {
        let find = state.cart.find(el => el.id === product.id);
        if (find) {
          find.quantity++;
        } else {
          let prod = Object.assign({
            quantity: 1
          }, prod)
          state.cart.push(product)
        }
    },
    decrimentProd(state, product) {
      if (product) {
        if (product.quantity > 1) {
          product.quantity--
        } else {
          state.cart.splice(state.cart.indexOf(product), 1)
        }
      }
    },
    clearCart(state) {
      state.cart = []
    },
    delProd(state, product) {
      state.cart.splice(state.cart.indexOf(product), 1)
    },
  },
  actions: {
    addToCart(ctx, product) {
      ctx.commit('ADD_TO_CART', product)
    },
  },
  getters: {
    cart(state) {
      return state.cart
    },
  },
}