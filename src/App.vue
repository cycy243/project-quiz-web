<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/header/AppHeader.vue'
</script>

<template>
  <AppHeader />

  <main class="page_content">
    <RouterView />
  </main>
</template>

<style scoped>
nav a.router-link-exact-active {
}

nav a.router-link-exact-active:hover {
}

nav a {
}

nav a:first-of-type {
}

.page_content {
  width: 70%;
}

main {
  margin-block-start: 2rem;
  padding: 1rem;
  background-color: rgba(70, 145, 51, 0.384);
}
</style>
