<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
// work with pinia store
// import { useMainStore } from "./store/mainStore";
// const store = useMainStore();

const layout = computed(() => {
  return route.meta.layout;
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>
