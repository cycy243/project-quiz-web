<template>
  <div class="search-bar">
    <input
      v-model="inputValue"
      type="text"
      placeholder="Search users, quizzes, ..."
      class="search-bar-input"
    />
    <IconSearch class="search-bar-search-icon" @click.prevent="searchClicked" />
  </div>
</template>
<script setup lang="ts">
import IconSearch from '../icons/IconSearch.vue'
import { ref } from 'vue'

type SearchBarEmits = {
  (e: 'change', value: string): void
  (e: 'submit', value: string): void
}

const inputValue = ref<string>()

const emit = defineEmits<SearchBarEmits>()

function searchClicked() {}
</script>
<style lang="css" scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  width: 380px;
  background-color: #b1b2b5;
  padding-block: 3px;
  padding-inline: 6px;
  justify-content: space-between;
}

.search-bar,
.search-bar-input {
  border-radius: 25px;
}

.search-bar-search-icon {
  margin-inline-end: 5px;
  cursor: pointer;
}

.search-bar-input {
  border-radius: 25px;
  width: 330px;
  border-color: transparent;
}
</style>
