<template>
  <div>
    <span>Select a question type</span>
    <select v-model="selectedOption" @change.prevent="onTypeChanged">
      <option selected :value="QuestionTypeEnum.SINGLE_CHOICE">Single choice</option>
      <option :value="QuestionTypeEnum.TRUE_FALSE">True of false</option>
      <option :value="QuestionTypeEnum.MULTIPLE_CHOICE">Multiple choices</option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { QuestionTypeEnum } from './questionTypeEnum'

const emit = defineEmits<{ (e: 'type-change', value: QuestionTypeEnum): void }>()

const selectedOption = ref(QuestionTypeEnum.SINGLE_CHOICE)

const onTypeChanged = () => {
  emit('type-change', selectedOption.value)
}
</script>
<style lang=""></style>
