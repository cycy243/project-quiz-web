<template>
  <div class="input_wrapper">
    <label :for="name">{{ title }}:</label>
    <input
      :type="type"
      :name="name"
      :id="id || name"
      :value="defaultValue"
      @change="(event: Event) => $emit('update:modelValue', event.target?.files[0])"
      @blur="$emit('blur')"
    />
    <div v-if="error" class="error_wrapper">
      <p>{{ error }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { FormInputProps } from './FormInputProps'

const props = defineProps<FormInputProps<File>>()

const emit = defineEmits(['update:modelValue', 'blur'])
</script>
<style lang="css" scoped></style>
