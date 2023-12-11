<template>
  <main>
    <AppNavbar />

    <section class="catalog">
      <div class="container catalog__container">
        <div class="catalog__order order">
          <section :class="['order__wrapper', {'order_open': order_open }]">
            <div class="order__wrap-title" tabindex="0" role="button" @click="order_open = !order_open">
              <h2 class="order__title">Корзина</h2>

              <span class="order__count">{{ cartStore.countCart }}</span>
            </div>

            <div v-if="cartStore.countCart > 0" class="order__wrap_list">
              <ul class="order__list">
                <li class="order__item" v-for="product in cartStore.carts" :key="product.id">
                  <img :src="product.img" :alt="product.name" class="order__image">

                  <div class="order__product">
                    <h3 class="order__product-title">{{ product.name }}</h3>

                    <p class="order__product-weight">{{ product.weight }}</p>

                    <p class="order__product-price">{{ product.price }}
                      <span class="currency">₽</span>
                    </p>
                  </div>

                  <div class="order__product-count count">
                    <button class="count__minus" @click="cartStore.diminutionQuantity(product)">-</button>
                    <p class="count__amount">{{ product.quantity }}</p>
                    <button class="count__plus" @click="cartStore.addingQuantity(product)">+</button>
                  </div>
                </li>
              </ul>

              <div class="order__total">
                <p>Итого</p>
                <p>
                  <span class="order__total-amount">{{ cartStore.totalPriceOfProducts }}</span>
                  <span class="currency">₽</span>
                </p>
              </div>

              <button class="order__submit" @click="modalStore.openingAndClosingModalDelivery()">Оформить заказ</button>

              <div class="order__wrap-appeal">
                <p class="order__appeal">{{ cartStore.totalPriceOfProducts > 599 ? 'Бесплатная доставка' : 'Доставка - 199₽'}}</p>
                <button class="order__close" @click="order_open = false">Свернуть</button>
              </div>
            </div>

            <div v-else>
              <p>Тут пока пусто :(</p>
            </div>
          </section>
        </div>

        <div class="catalog__wrapper">
          <h2 class="catalog__title">{{ productsData.name }}</h2>

          <div class="catalog__wrap_list">
            <ul class="catalog__list">
              <li class="catalog__item" v-for="product in productsData.products" :key="product.id">
                <article class="product">
                  <img :src="product.img" alt="Мясная бомба" class="product__image">

                  <p class="product__price">{{ product.price }} <span class="currency">₽</span></p>

                  <h3 class="product__title">
                    <button class="product__detail">{{ product.name }}</button>
                  </h3>

                  <p class="product__weight">{{ product.weight }}</p>

                  <button v-if="!cartStore.isInCart(product)" class="product__add" type="button" @click="modalStore.openingAndClosingModalProduct(product)">Добавить</button>
                  <button v-else class="product__in_cart" type="button">В корзине</button>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>

  <AppModalProduct />
  <AppModalDelivery/>
</template>

<script setup>
import burgerData from "/burger.json"
import snackData from "/snack.json"
import hotDogData from "/hot-dog.json"

import AppModalProduct from "./AppModalProduct.vue";
import AppModalDelivery from "@/components/AppModalDelivery.vue";
import AppNavbar from "../components/AppNavbar.vue"

import { useCartStore } from "@/store/cartStore";
import { useModalStore } from "@/store/modalStore";
import {onMounted, ref, watch} from 'vue'
import {useRoute} from "vue-router";

const route = useRoute()

const productsData = ref([])

onMounted(() => {
  if (route.query.catalog === 'burger') {
    productsData.value = burgerData
  }
  if (route.query.catalog === 'snack') {
    productsData.value = snackData
  }
  if (route.query.catalog === 'hot-dog') {
    productsData.value = hotDogData
  }

})
watch(() => route.query.catalog, (newCatalog) => {
  if (newCatalog === 'burger') {
   return  productsData.value = burgerData
  }
  if (newCatalog === 'snack') {
   return  productsData.value = snackData
  }
  if (newCatalog === 'hot-dog') {
    return productsData.value = hotDogData
  }
  if (newCatalog.length > 1) {
   return  productsData.value = []
  }
});
const cartStore = useCartStore();
const modalStore = useModalStore();


const order_open = ref(false)


</script>

<style scoped>

</style>
