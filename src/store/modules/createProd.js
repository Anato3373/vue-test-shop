export default {
    namespaced: true,
    state: {
        products: [],
    },
    mutations: {
        createProducts(state, prod) {
            state.products = prod
        },
    },
    actions: {
        fetchProducts(ctx) {
            fetch('https://raw.githubusercontent.com/VadimTs12/product-shop/master/products-shop.json')
                .then(prod => prod.json().then((prod) => { ctx.commit('createProducts', prod)}))           
        },
    },
    getters: {
        allProducts(state) {
            return state.products
        },
        cardProduct: (state) => (id) => {
                return state.products.find(el => {
                    if (el.id === id) {
                        return el
                    }
                })
        },
        filter: (state) => (value) => {
            if(value === ''){
                return state.products
            }
            let regExp = new RegExp(value, 'i');
            return state.products.filter(el => regExp.test(el.title))
        },
    },
}