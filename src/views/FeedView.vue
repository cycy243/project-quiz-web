<template>
  <div class="feed">
    <NewQuizModal @close="closeModal" class="modal" v-if="showNewQuizModal" />
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
      <div>
        <SearchBar placeholder="Search users, quizzes, ..." />
        <ActionButton @click.prevent="newQuizClicked"><IconNew /></ActionButton>
      </div>
    </div>
    <div class="wrapper">
      <QuizCard v-for="(item, index) in quizzes" :key="index" class="quiz-card" />
    </div>
    <div class="wrapper pagination-wrapper">
      <ActionButton><IconPrevious /></ActionButton>
      <ActionButton>1</ActionButton>
      <ActionButton>2</ActionButton>
      <ActionButton>3</ActionButton>
      <ActionButton><IconNext /></ActionButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconSort from '@/components/icons/IconSort.vue'
import IconClose from '@/components/icons/IconClose.vue'
import QuizCard from '@/components/cards/QuizCard.vue'
import SearchBar from '@/components/form/SearchBar.vue'
import { ref } from 'vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import ActionButton from '@/components/buttons/ActionButton.vue'
import IconNext from '@/components/icons/IconNext.vue'
import IconPrevious from '@/components/icons/IconPrevious.vue'
import IconNew from '@/components/icons/IconNew.vue'
import NewQuizModal from '@/components/quiz/NewQuizModal.vue'

const quizzes = ref([5, 1, 8, 3])

function sortClicked() {
  alert("'sort' button has been clicked")
}

function filterClicked() {
  alert("'filter' button has been clicked")
}

const showNewQuizModal = ref(false)

function newQuizClicked() {
  showNewQuizModal.value = !showNewQuizModal.value
}
function closeModal() {
  showNewQuizModal.value = false
}
</script>
<style lang="css" scoped>
.modal {
  z-index: 100;
  position: absolute;
  top: 100px;
  margin: auto;
}

.feed,
.feed .wrapper,
.actions-wrapper,
.filtering-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.feed {
  justify-content: center;
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

.actions-wrapper div:last-child {
  display: flex;
  flex-direction: row;
}
</style>
