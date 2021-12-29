<template>
  <div>
    

    <img alt="Vue logo" src="@/assets/logo.png">
    <Products
      v-bind:API="API"
      v-bind:product="product"
      v-bind:getJson="getJson"
    />
    <router-link to="/all-products"> <button>Brows all</button> </router-link>
  </div>

</template>

<script>
import Products from "@/components/Products";


export default {
  name: 'App',
  props: {

  },

  components: {
    Products,

  },

  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
    }
  },

  data(){
    return{
      API: 'https://raw.githubusercontent.com/VadimTs12/product-shop/master/products-shop.json',
      product: [],
    }
  }
}
</script>

