<template>
  <div class="input_wrapper">
    <label>{{ title }}:</label>
    <input
      :type="type"
      @change="(event: Event) => $emit('update:modelValue', event.target?.files[0])"
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
