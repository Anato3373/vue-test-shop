<template>
  <div class="prod">
    <div
      class="cart__products col-md-12 col-lg-6"
      v-for="product in cart"
      :key="product.id"
      
    >
      <div class="cart__product-item" v-if="product">
        <div class="cart__product-image">
          <img :src="product.img" alt="" class="image__cart" />
        </div>
        <div class="cart__product-content">
          <p class="title">
            {{ product.title }}
          </p>
          <p class="price__block">
            Price: <span class="price">${{ product.price }} </span>
          </p>
          <p class="color__block">Color: <span class="color">Red</span></p>
          <p class="size__block">Size: <span class="size">Xl</span></p>
          <p class="quantity__block">
            Quantity: <span class="quantiy">{{ product.quantity }}</span>
          </p>
        </div>
        <div class="cart__btn">
        <button class="btn__clear button" @click="product.quantity++">+</button>
        <button class="btn__clear button" @click="decrimentProd(product)">-</button>
      </div>
        <button class="close" @click="delProd(product)">
          <svg
            width="13"
            height="13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.416 6.004l4.3-4.29a1.004 1.004 0 10-1.42-1.42l-4.29 4.3-4.29-4.3a1.004 1.004 0 00-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l4.29-4.3 4.29 4.3a1.002 1.002 0 001.639-.325 1 1 0 00-.22-1.095l-4.3-4.29z"
              fill="#6F6E6E"
            />
          </svg>
        </button>
      </div>
      <div v-else> Корзина пуста </div>
    </div>
      <div class="cart__btn" @click="clearCart()">
        <button class="btn__clear button">CLEAR SHOPPING CART</button>
      </div>
    
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
      ...mapGetters({
        cart: 'forCart/cart'
      }),
  },
  methods: {
      ...mapMutations({
        decrimentProd: 'forCart/decrimentProd',
        clearCart: 'forCart/clearCart',
        delProd: 'forCart/delProd'
      })
  }
}
</script>

<style scoped>
.prod {
  background-color: #aaa;
  width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
@media (min-width: 992px) {
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}

@media (min-width: 768px) {
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) / 2);
  padding-left: calc(var(--bs-gutter-x) / 2);
  margin-top: var(--bs-gutter-y);
}

.section__cart .section__content {
  padding: 65px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.section__cart .section__content .cart__product-item {
  width: 100%;
  -webkit-box-shadow: 13px 16px 21px #ccc;
  box-shadow: 13px 16px 21px #ccc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.section__cart .section__content .cart__product-item .cart__product-image {
  max-width: 220px;
  width: 100%;
  margin-right: 20px;
}

.section__cart .section__content .cart__product-item .cart__product-image img {
  width: 100%;
  height: auto;
}

.section__cart .section__content .cart__product-content {
  padding: 20px;
  margin-right: 20px;
}

.section__cart .section__content .cart__product-content p {
  margin-bottom: 10px;
}

.section__cart .section__content .cart__product-content .title {
  font-size: 24px;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .section__cart .section__content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .section__cart .section__content .cart__product-item .cart__product-image {
    margin-right: 10px;
  }

  .section__cart .section__content .cart__product-content {
    padding: 10px;
  }

  .section__cart .section__content .cart__product-content p {
    font-size: 12px;
  }

  .section__cart .section__content .cart__product-content .title {
    font-size: 16px;
  }
}

.section__cart .section__content .cart__product-content .price {
  color: #ef5b70;
}

.section__cart .section__content .close {
  position: absolute;
  right: 10px;
  top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.section__cart .section__content .cart__btn {
  margin-top: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.section__cart .section__content .button {
  border: 1px solid #ccc;
  padding: 20px;
}

@media (max-width: 768px) {
  .section__cart .section__content .button {
    padding: 10px;
    font-size: 14px;
  }

  .section__new-products .section__content h1.title {
    display: none;
  }
}

.section__features {
  padding-bottom: calc(30px + (100 - 30) * ((100vw - 320px) / (1600 - 320)));
  position: relative;
  z-index: 5;
  background: #fff;
  max-width: 1440px;
  margin: -45px auto 50px;
  width: 100%;
  border: 1px solid #eaeaea;
}

@media (max-width: 1440px) {
  .section__features {
    max-width: 970px;
  }
}

@media (max-width: 993px) {
  .section__features {
    max-width: 750px;
  }
}

@media (max-width: 769px) {
  .section__features {
    max-width: 100%;
    margin-bottom: 50px;
    margin-top: 0;
  }
}

.section__features .section__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: calc(30px + (60 - 30) * ((100vw - 320px) / (1600 - 320)));
}

@media (max-width: 480px) {
  .section__cart .section__content .button {
    padding: 5px;
    font-size: 10px;
  }

  .section__features .section__content {
    padding: 30px;
  }
}
</style>