<template>
  <header>
    <RouterLink :to="{ name: 'home' }"
      ><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height=""
    /></RouterLink>

    <div class="wrapper menu_wrapper">
      <nav class="nav_menu">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <nav name="admin_menu" v-if="isAdmin"></nav>
    </div>
    <div class="auth_menu">
      <nav>
        <ActionButton>
          <RouterLink :to="{ name: 'register' }">Register</RouterLink>
        </ActionButton>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ActionButton from '../buttons/ActionButton.vue'

const isAdmin = ref(false)
</script>

<style lang="css" scoped>
.wrapper.menu_wrapper .nav_menu a {
  margin: 0.3rem;
}

.auth_menu {
  position: absolute;
  right: 0;
  margin: 1rem 2rem 1rem 2rem;
}

header {
  background-color: rgba(70, 145, 51, 0.384);
  line-height: 1.5;
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.logo {
  display: block;
  margin: 0;
  margin-inline: 0.4rem;
}

nav a.router-link-exact-active {
  color: blue;
}

nav a.router-link-exact-active:hover {
}

.wrapper {
  margin-top: auto;
  margin-bottom: auto;
}

.wrapper.menu_wrapper {
  margin-inline-start: 1rem;
  display: flex;
}

.wrapper.menu_wrapper .nav_menu {
  display: flex;
  justify-content: space-around;
}
</style>
