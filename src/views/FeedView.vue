<template>
  <div class="feed">
    <div class="actions-wrapper">
      <div class="filtering-wrapper">
        <div>Sort</div>
        <div>Filter</div>
      </div>
      <SearchBar />
    </div>
    <div class="wrapper">
      <QuizCard v-for="(item, index) in quizzes" :key="index" class="quiz-card" />
    </div>
  </div>
</template>
<script setup lang="ts">
import QuizCard from '../components/cards/QuizCard.vue'
import SearchBar from '../components/form/SearchBar.vue'
import { ref } from 'vue'

const quizzes = ref([5, 1, 8, 3])
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
  width: auto;
}

.feed .actions-wrapper {
  margin-inline: 25px;
  width: 100%;
  justify-content: space-between;
}

.quiz-card {
  margin-block: 10px;
}
</style>
