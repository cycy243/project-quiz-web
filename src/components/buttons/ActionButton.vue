<template>
  <button class="action_btn">
    <slot></slot>
  </button>
</template>
<script setup lang="ts"></script>
<style lang="css" scoped>
.action_btn {
  background-color: greenyellow;
  padding: 0.4rem;
  border-radius: 25px;
}

.action_btn:hover {
  cursor: pointer;
}
</style>
