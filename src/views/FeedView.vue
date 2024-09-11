<template>
  <div class="feed">
    <div class="actions-wrapper">
      <div class="filtering-wrapper">
        <ActionButton @click.prevent="sortClicked">
          <IconSort class="icon" />
          <span>Sort</span>
        </ActionButton>
        <ActionButton @click.prevent="filterClicked">
          <IconFilter class="icon" />
          <span>Filter</span>
        </ActionButton>
      </div>
      <SearchBar />
    </div>
    <div class="wrapper">
      <QuizCard v-for="(item, index) in quizzes" :key="index" class="quiz-card" />
    </div>
    <div class="wrapper pagination-wrapper">
      <ActionButton><<</ActionButton>
      <ActionButton>1</ActionButton>
      <ActionButton>2</ActionButton>
      <ActionButton>3</ActionButton>
      <ActionButton>>></ActionButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconSort from '@/components/icons/IconSort.vue'
import QuizCard from '@/components/cards/QuizCard.vue'
import SearchBar from '@/components/form/SearchBar.vue'
import { ref } from 'vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'

const quizzes = ref([5, 1, 8, 3])

function sortClicked() {
  alert("'sort' button has been clicked")
}

function filterClicked() {
  alert("'filter' button has been clicked")
}
</script>
<style lang="css" scoped>
.feed,
.feed .wrapper,
.actions-wrapper,
.filtering-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.feed .wrapper {
  justify-content: center;
  width: 100%;
}

.feed .actions-wrapper {
  margin-inline: 25px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.action_btn {
  background-color: #8cbb81;
  border-radius: 25px;
  padding-block: 2px;
  padding-inline: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
  color: black;
}

.pagination-wrapper .action_btn {
  margin-inline: 4px;
  width: 25px;
  height: 25px;
  text-align: center;
  border-radius: 10px;
}

.feed .actions-wrapper .action_btn:first-child {
  margin-inline-end: 10px;
}

.feed .actions-wrapper .filtering-wrapper .icon {
  margin-inline-end: 6px;
}

.quiz-card {
  margin-block: 10px;
}
</style>
