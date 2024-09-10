<template>
  <div class="feed">
    <QuizCard v-for="(item, index) in quizzes" :key="index" />
  </div>
</template>
<script setup lang="ts">
import QuizCard from '../components/cards/QuizCard.vue'
import { ref } from 'vue'

const quizzes = ref([5, 1, 8, 3])
</script>
<style lang="css">
.feed {
  display: flex;
  flex-wrap: wrap;
  width: auto;
}
</style>
