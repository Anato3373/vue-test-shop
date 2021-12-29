<template>
  <div>
      <input type="text" v-model="search">
      <button> search </button>
    <div v-if="filter.length > 0">
      <div class="itemProduct">
        <div
          class="prod"
          v-for="prod in filter"
          :key="prod.id"
        >
        <router-link :to="/product-card/ + prod.id">
          <img :src="prod.img" width="250" alt=""/>
        </router-link>
          <p class="id_product">{{ prod.id }}</p>
          <p>{{ prod.title }}</p>
          <p>${{ prod.price }}</p>
          <button class="btn" @click.prevent="addToCart(prod)">Buy</button>
        </div>
      </div>
    </div>
    <div v-else> Товар не найден </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
   data() {
     return {
       search: ''
     }
   },

computed: {
    ...mapGetters({
      allProducts: 'createProd/allProducts'
    }),
    filter() {
      return this.$store.getters['createProd/filter'](this.search)
    }
},

methods: {
  ...mapActions({
    fetchProducts: 'createProd/fetchProducts',
    addToCart: 'forCart/addToCart'
  })

},

mounted() {
    this.fetchProducts();
  },

};

</script>

<style scoped>

</style>