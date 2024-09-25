<template>
  <div class="quiz-modal">
    <div>
      <span></span>
      <span>New quiz</span>
      <IconClose @click="closeClicked" />
    </div>
    <form @submit.prevent="onSubmit">
      <div>
        <span class="section-title">General</span>
        <div class="input-wrapper">
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Quiz' title"
            v-model="title"
            v-bind="titleProps"
          />
          <div v-if="errors.title" class="error_wrapper">
            <p>{{ errors.title }}</p>
          </div>
        </div>
        <div class="input-wrapper">
          <label for="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Quiz' description"
            v-model="description"
            v-bind="descriptionProps"
          ></textarea>
          <div v-if="errors.description" class="error_wrapper">
            <p>{{ errors.description }}</p>
          </div>
        </div>
      </div>
      <div class="tags">
        <span class="section-title">Tags</span>
        <span>No tags</span>
        <div>
          <input />
          <ActionButton class="new-tag-btn"><IconNew /><span>Add tag</span></ActionButton>
        </div>
      </div>
      <div class="question-section">
        <span class="section-title">Questions</span>
        <p>No question added</p>
        <ActionButton class="new-question-btn"><IconNew /><span>New question</span></ActionButton>
      </div>
      <div>
        <ActionButton><button class="submit-btn">Submit</button></ActionButton>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import IconClose from '../icons/IconClose.vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import ActionButton from '../buttons/ActionButton.vue'
import IconNew from '../icons/IconNew.vue'

const schema = toTypedSchema(
  yup.object({
    title: yup.string().required(),
    description: yup.string().required().min(10).max(255)
  })
)

const { defineField, handleSubmit, errors } = useForm({ validationSchema: schema })

const [title, titleProps] = defineField('title')
const [description, descriptionProps] = defineField('description')

const onSubmit = handleSubmit((value: any) => {
  console.log('coucou')

  emit('submit')
})

type NewQuizModalEmits = {
  (e: 'close'): void
  (e: 'submit'): void
}

const emit = defineEmits<NewQuizModalEmits>()

function closeClicked() {
  emit('close')
}
</script>
<style lang="css" scoped>
.section-title {
  font-size: 14pt;
  font-weight: bold;
}
.quiz-modal {
  min-width: 350px;
  border-radius: 15px;
  background-color: #b8d5b1;
  border: 1px solid black;
}

.quiz-modal form > div:last-child {
  border-radius: 0 0 15px 15px;
  background-color: #8cbb81;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quiz-modal > div:first-child {
  padding-block: 10px;
  border-radius: 15px 15px 0 0;
  background-color: #8cbb81;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quiz-modal form > div {
  padding-inline: 24px;
}

.new-question-btn,
.new-tag-btn {
  padding-block: 0 !important;
  align-items: center;
  display: flex;
}

.tags {
  display: flex;
  flex-direction: column;
}

.tags > div {
  display: flex;
  justify-content: space-between;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper label {
  margin-top: 10px;
}

svg {
  width: 19px !important;
  height: 19px !important;
}

.quiz-modal > form div:last-child button button {
  appearance: none;
  background: none;
  border: none;
}

.quiz-modal > form div:nth-last-child(2) p {
  margin: 0;
}

.quiz-modal form > div {
  margin-bottom: 15px;
}

.question-section > button {
  align-self: center;
}

.question-section {
  display: flex;
  flex-direction: column;
}

.quiz-modal form > div:last-child {
  margin-bottom: 0;
}

.quiz-modal form > div:last-child button {
  padding-block: 0 !important;
}

button {
  border: none;
  font-weight: bold;
  font-size: 9pt;
  margin-block: 0.1rem;
}

input,
textarea {
  border: none;
  border-radius: 10px 10px 0px 10px;
}
</style>
