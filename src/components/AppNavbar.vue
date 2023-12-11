<template>
  <nav class="navigation">
    <div class="container navigation__container">
      <ul class="navigation__list visible_with_anim">
        <li v-for="catalog in catalogs" :key="catalog.name" class="navigation__item" @click="changeCatalog(catalog.slug)">
          <button :class="['navigation__button', catalog.className, { 'navigation__button_active' : activeCatalog(catalog.slug) }]">
            {{ catalog.name }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import catalogs from '/catalogs.json';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { onMounted, ref, watch, } from "vue";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const currentCatalog = ref(route.query.catalog || 'burger');

onMounted(() => {
  if (Object.entries(router.currentRoute.value.query).length === 0) {
    router.push({ query: { catalog: 'burger' } });
  }

  gsap.registerPlugin(TextPlugin);

  watch(() => route.query.catalog, (newCatalog) => {
    currentCatalog.value = newCatalog;
  });
});

const changeCatalog = slug => {
  router.push({ query: { catalog: slug } });
}

const activeCatalog = slug => {
  return currentCatalog.value === slug;
};
</script>

<style scoped>
.visible_with_anim {
  opacity: 0;
  animation-name: anim-visible;
  animation-delay: .5s;
  animation-direction: normal;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes anim-visible {
  100% {
    opacity: 1;
  }
}
</style>
