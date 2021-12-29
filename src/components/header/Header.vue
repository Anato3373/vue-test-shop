<template>
  <header class="header">
    <div class="_container">
      <nav class="navbar navbar-expand-lg">
        <div
          class="collapse navbar-collapse d-flex justify-content-around"
          id="navbarNavAltMarkup"
        >
         

          <ul
            class="
              navbar-nav-left
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <li class="logo">
              <router-link to="/" class="logo__link">
                <img src="../../assets/logo.png" width="50" alt="" />
              </router-link>
            </li>
          </ul>

          <ul
            class="
              navbar-nav-right
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <li class="menu">
              <div class="menu__icon">
                <span></span>
              </div>
            </li>
            <li class="buy">
              <router-link to="/cart" class="buy__link">
                <svg
                  version="1.1"
                  id="Capa_1"
                  fill="#fff"
                  width="36px"
                  height="36px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 60 60"
                  style="enable-background: new 0 0 60 60"
                  xml:space="preserve"
                >
                  <path
                    d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
	H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
	c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
	c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
	c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
	c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
	S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
	s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"
                  />
                </svg>
              </router-link>
              <div class="prod-circul" v-if="cartsValue > 0">
                <span> {{ cartsValue }} </span>
              </div>
              <div v-else></div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="menu__block">
      <div class="close">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
            fill="#6F6E6E"
          />
        </svg>
      </div>
      <p class="menu__title">Menu</p>
      <div class="block__item">
        <p class="title">MAN</p>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link"> Accessories </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Bags </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Denim </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> T-Shirts </a>
          </li>
        </ul>
      </div>
      <div class="block__item">
        <p class="title">WOMAN</p>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link"> Accessories </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Jackets & Coats </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Polos </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> T-Shirts </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Shirts </a>
          </li>
        </ul>
      </div>
      <div class="block__item">
        <p class="title">KIDS</p>
        <ul class="block__item-list">
          <li class="list__item">
            <a href="" class="list__item-link"> Accessories </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Jackets & Coats </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Polos </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> T-Shirts </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Shirts </a>
          </li>
          <li class="list__item">
            <a href="" class="list__item-link"> Bags </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      cart: "forCart/cart",
    }),
    cartsValue() {
      return this.cart.length > 0
        ? this.cart.reduce((sum, current) => sum + current.quantity, 0)
        : 0;
    },
  },
};
</script>

<style scoped>
.prod-circul {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  left: 32px;
  border-radius: 50%;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
header {
  background-color: #222;
  width: 100%;
  z-index: 1000;
  -webkit-box-shadow: #22222270 0 3px 32px 4px;
  box-shadow: #22222270 0 3px 32px 4px;
  position: fixed;
}

header ._container {
  position: relative;
  z-index: 2;
}

header .navbar-collaps {
  display: flex;
  justify-content: space-between;
}

header .navbar-nav-left {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

header .navbar-nav-left .search__form .search {
  position: absolute;
  margin: auto;
  top: 0;
  left: 60px;
  bottom: 0;
  width: 40px;
  height: 40px;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  z-index: 4;
}

header .navbar-nav-left .search__form .search:hover {
  cursor: pointer;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

ul {
  list-style-type: none;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.collapse:not(.show) {
  display: none;
}

.justify-content-between {
  justify-content: space-between !important;
}

.d-flex {
  display: flex !important;
  justify-content: space-around
}

header .navbar-nav-left .search__form .search::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 22px;
  right: 0;
  bottom: 0;
  left: 22px;
  width: 12px;
  height: 2px;
  background: #fff;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

header .navbar-nav-left .search__form .search::after {
  content: "";
  position: absolute;
  margin: auto;
  top: -5px;
  right: 0;
  bottom: 0;
  left: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid #fff;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

header .navbar-nav-left .search__form input {
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 60px;
  width: 50px;
  height: 40px;
  outline: 0;
  border: none;
  background: #fff;
  color: #202020;
  padding: 0 60px 0 20px;
  border-radius: 30px;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
}

header .navbar-nav-left .search__form input:hover {
  cursor: pointer;
}

header .navbar-nav-left .search__form input:focus {
  width: 250px;
  opacity: 1;
  cursor: text;
}

header .navbar-nav-left .search__form input:focus ~ .search {
  left: 270px;
  z-index: 6;
  -webkit-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

@media (max-width: 480px) {
  header .navbar-nav-left .search__form input:focus {
    width: 180px;
  }

  header .navbar-nav-left .search__form input:focus ~ .search {
    left: 200px;
  }
}

header .navbar-nav-left .search__form input:focus ~ .search::before {
  top: 0;
  left: 0;
  width: 25px;
  background: #0f0f0f;
}

header .navbar-nav-left .search__form input:focus ~ .search::after {
  top: 0;
  left: 0;
  width: 25px;
  height: 2px;
  border: none;
  background: #0f0f0f;
  border-radius: 0;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

header .navbar-nav-left .search__form input::-webkit-input-placeholder {
  color: #353535;
  opacity: 0.5;
  font-weight: bolder;
}

header .navbar-nav-left .search__form input::-moz-placeholder {
  color: #353535;
  opacity: 0.5;
  font-weight: bolder;
}

header .navbar-nav-left .search__form input:-ms-input-placeholder {
  color: #353535;
  opacity: 0.5;
  font-weight: bolder;
}

header .navbar-nav-left .search__form input::-ms-input-placeholder {
  color: #353535;
  opacity: 0.5;
  font-weight: bolder;
}

header .navbar-nav-left .search__form input::placeholder {
  color: #353535;
  opacity: 0.5;
  font-weight: bolder;
}

header .navbar-nav-right {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

header .navbar-nav-right .user {
  margin: 0 20px;
}

@media (max-width: 768px) {
  header .navbar-nav-right {
    -webkit-box-pack: end !important;
    -ms-flex-pack: end !important;
    justify-content: end !important;
  }

  header .navbar-nav-right .buy,
  header .navbar-nav-right .user {
    display: none;
  }
}

header .menu .menu__icon {
  z-index: 5;
  display: block;
  position: relative;
  width: 30px;
  height: 18px;
  cursor: pointer;
}

header .menu .menu__icon span,
header .menu .menu__icon::after,
header .menu .menu__icon::before {
  left: 0;
  position: absolute;
  height: 10%;
  width: 100%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  background-color: #fff;
}

header .menu .menu__icon::after,
header .menu .menu__icon::before {
  content: "";
}

header .menu .menu__icon::before {
  top: 0;
}

header .menu .menu__icon::after {
  bottom: 0;
}

header .menu .menu__icon span {
  top: 50%;
  -webkit-transform: scale(1) translate(0, -50%);
  -ms-transform: scale(1) translate(0, -50%);
  transform: scale(1) translate(0, -50%);
}

header .menu .menu__icon._active span {
  -webkit-transform: scale(0) translate(0, -50%);
  -ms-transform: scale(0) translate(0, -50%);
  transform: scale(0) translate(0, -50%);
}

header .menu .menu__icon._active::before {
  top: 50%;
  -webkit-transform: rotate(-45deg) translate(0, -50%);
  -ms-transform: rotate(-45deg) translate(0, -50%);
  transform: rotate(-45deg) translate(0, -50%);
}

header .menu .menu__icon._active::after {
  bottom: 50%;
  -webkit-transform: rotate(45deg) translate(0, 50%);
  -ms-transform: rotate(45deg) translate(0, 50%);
  transform: rotate(45deg) translate(0, 50%);
}

header .menu__block {
  background: #fff;
  position: absolute;
  top: 55px;
  right: 0;
  -webkit-transform: translateX(120%);
  -ms-transform: translateX(120%);
  transform: translateX(120%);
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  padding: 20px;
  z-index: 1;
}

header .menu__block .menu__title {
  padding-left: 25px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

header .menu__block p.title {
  font-size: 14px;
  color: #f16d7f;
  padding-left: 25px;
  margin-bottom: 10px;
}

header .menu__block .block__item-list {
  padding-left: 50px;
}

header .menu__block .block__item-list li {
  margin-bottom: 10px;
}

header .menu__block .block__item-list li a {
  color: #6f6e6e;
}

header .menu__block .close {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
}

header .menu__block.open {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

.menu {
  margin: 0 10px;
}

.buy {
  position: relative;
  margin: 0 20px;
}
</style>