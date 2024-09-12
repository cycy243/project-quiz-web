<template>
  <div class="search-bar">
    <input v-model="inputValue" type="text" :placeholder="placeholder" class="search-bar-input" />
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
const emit = defineEmits<SearchBarEmits>()

type SearchBarProps = {
  placeholder: string
}
const props = defineProps<SearchBarProps>()

const inputValue = ref<string>()

function searchClicked() {
  emit('submit', inputValue.value || '')
}
</script>
<style lang="css" scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  width: 300px;
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
