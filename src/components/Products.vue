<template>
  <div>
    <div class="itemProduct">
      <div class="prod" v-for="prod in allProducts.slice(0, 6)" :key="prod.id">
        <router-link :to="/product-card/ + prod.id"
          ><img :src="prod.img" width="250" alt=""
        /></router-link>
        <p class="id_product">{{ prod.id }}</p>
        <p>{{ prod.title }}</p>
        <p>${{ prod.price }}</p>
        <button class="btn" @click.prevent="addToCart(prod)">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      allProducts: 'createProd/allProducts',
      cardProduct: 'createProd/cardProduct'
    }),
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: mapActions({
      fetchProducts: 'createProd/fetchProducts',
      addToCart: 'forCart/addToCart'
    }),
    
};
</script>

<style scoped>
.itemProduct {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.prod {
  background-color: #aaa;
  width: 300px;
  min-height: 300px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.btn {
  outline: none;
  border: none;
  color: red;
  margin: 0 0 10px 0;
  padding: 25px;
  background-color: blue;
  border-radius: 15px;
  box-shadow: -8px 5px 14px 0px #fff;
}
.btn:hover {
  box-shadow: -8px 5px 14px 0px olive;
}
.btn:active {
  box-shadow: 0 0 0 0 olive;
}
</style>
