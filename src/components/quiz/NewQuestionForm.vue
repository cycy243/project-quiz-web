<template>
  <div class="question-modal">
    <div>
      <QuestionTypeSelector @type-change="onTypeChanged" />
      <SingleChoiceQuestion v-show="questionType === QuestionTypeEnum.SINGLE_CHOICE" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { QuestionTypeEnum } from './questionTypeEnum'
import QuestionTypeSelector from './QuestionTypeSelector.vue'
import SingleChoiceQuestion from './questions/SingleChoiceQuestion.vue'

const questionType = ref(QuestionTypeEnum.SINGLE_CHOICE)

const onTypeChanged = (type: QuestionTypeEnum) => {
  console.log(type)

  questionType.value = type
}
</script>
<style lang="css" scoped>
.question-modal {
  min-width: 350px;
  border-radius: 15px;
  background-color: #b8d5b1;
  border: 1px solid black;
}
</style>
