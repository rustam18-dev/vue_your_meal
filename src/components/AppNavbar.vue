<template>
  <nav class="navigation">
    <div class="container navigation__container">
      <ul class="navigation__list">
        <li v-for="(catalog, index) in catalogs" :key="catalog.name" class="navigation__item">
          <button :class="['navigation__button', catalog.className, { 'navigation__button_active' : index === 0 }]">{{ catalog.name }}</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import catalogs from '/catalogs.json'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import {onMounted} from "vue";

onMounted(() => {
  // gsap.from(".navigation__button", {rotation: 360, x: 50, duration: 1});
  // gsap.from(".navigation__button", {rotation: -360, x: -100, duration: 1});
  // gsap.fromTo(".navigation__button", {x: -100},{rotation: 360, x: 0, duration: 1});
  // const tl = gsap.timeline();
  // tl.addLabel("step2", 123123)
  //     .to(".navigation__button", {duration: 1, x: 100}) //notice that there's no semicolon!
  //     .to(".navigation__button", {duration: 1, x: 0})
      // .to(".box3", {duration: 3, rotation: 360});
  gsap.registerPlugin(TextPlugin)


})
</script>

<style scoped>

</style>
