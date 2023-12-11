<template>
  <header class="header">
    <div class="container header__container">
      <svg class="header__logo" viewBox="0 0 199 44" role="img" aria-label="Логотип YourMeal">
        <use href="src/assets/img/sprite.svg#logo"/>
      </svg>

      <div class="header__title-container">
        <h1 class="header__title">
          <span class="header__title-text">Только самые</span>
          <span class="header__title-text header__title-text_red">сочные бургеры!</span>
        </h1>

        <p class="header__appeal"></p>
      </div>
    </div>
  </header>
</template>

<script setup>
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import {onMounted} from "vue";

onMounted(() => {
  gsap.registerPlugin(TextPlugin)

  const tl = gsap.timeline();

  tl.to('.header__title', {
    duration: 2,
    text: 'Только самые сочные бургеры!'
  }).to('.header__appeal', {
    duration: 1,
    text: 'Бесплатная доставка от 599₽'
  })

})
</script>

<style scoped>

</style>
