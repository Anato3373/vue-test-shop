<template>
  <div>
    <div class="product__item" v-if="prod"> 
      <div class="product__item-content">
        <img :src="prod.img" alt="" class="image__products" />
        <div class="item__bg">
          <a class="card__link" href="" @click.prevent="addToCart(prod)">
            <svg
              width="27"
              height="25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.876 22.266a.146.146 0 00.084-.053 3.08 3.08 0 01.023-.027c.037-.042.04-.13.04-.175-.014-.107-.104-.18-.182-.18h-.01c-.078.006-.166.11-.16.232.01.116.096.203.168.203h.037zM8.22 22.26c.099 0 .18-.095.18-.21 0-.116-.081-.21-.18-.21-.1 0-.18.094-.18.21 0 .116.08.21.18.21zM22 24.266h-.16c-1.138 0-2.083-.911-2.163-2.068-.08-1.205.817-2.28 2.018-2.362.05-.003.098-.005.146-.005 1.139 0 2.1.901 2.178 2.057.032.603-.145 1.173-.53 1.613a2.16 2.16 0 01-1.49.765zM8.22 24.26c-1.205 0-2.18-.99-2.18-2.21s.975-2.21 2.18-2.21c1.204 0 2.18.99 2.18 2.21s-.976 2.21-2.18 2.21zm12.978-6.866H9.133a.965.965 0 01-.93-.716L4.278 2.247H1.522A.972.972 0 01.56 1.27c0-.537.432-.977.96-.977H5c.432 0 .817.293.93.717l3.925 14.43h10.704l3.556-8.306H12.258a.973.973 0 01-.962-.978c0-.537.433-.977.962-.977h13.33a.95.95 0 01.802.44 1 1 0 01.08.928l-4.39 10.26a.963.963 0 01-.882.587z"
                fill="#fff"
              />
            </svg>
            <p>Add to Cart</p>
          </a>
        </div>
      </div>
      
      <div class="product__item-text">
        <p class="item__title">
          {{ prod.title }}
        </p>
        <p class="item__desc">
          Known for her sculptural takes on traditional tailoring, Australian
          arbiter of cool Kym Ellery teams up with Moda Operandi.
        </p>
        <p class="item__price">${{ prod.price }}</p>
      </div>
    </div>
    <div v-else> Товар не найден </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cardProduct: 'createProd/cardProduct'
    }),
    prod(){
        return this.$store.getters['createProd/cardProduct'](+this.$route.params.id)
    }
  },
  methods: mapActions({
      fetchProducts: 'createProd/fetchProducts',
      addToCart: 'forCart/addToCart'
    }),
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  overflow-x: hidden;
  min-height: 100%;
  position: relative;
}

a,
a:hover,
a:visited {
  text-decoration: none;
}

img {
  vertical-align: top;
}

.product__item {
  background: #f8f8f8;
}

.product__item-content {
  position: relative;
}

.product__item-content .image__products {
  width: 250px;
}

.product__item-content .item__bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: rgba(58, 56, 56, 0.86);
  opacity: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.product__item-content .item__bg .card__link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #f8f8f8;
  padding: 10px;
  border: 1px solid #fff;
}

.product__item:hover .item__bg {
  opacity: 1;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.product__item-text {
  padding: 10px;
}

.product__item-text .item__title {
  font-size: 13px;
  line-height: 16px;
  color: #000;
  margin-bottom: 20px;
}

.product__item-text .item__desc {
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 20px;
  color: #5d5d5d;
}

.product__item-text .item__price {
  font-size: 16px;
  line-height: 19px;
  color: #f16d7f;
}

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

body {
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
}

p {
  margin: 0;
  padding: 0;
}
</style>