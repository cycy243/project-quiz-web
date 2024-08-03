<template>
  <div class="input_wrapper">
    <label :for="name">{{ title }}:</label>
    <input
      :type="type"
      :name="name"
      :id="id || name"
      :placeholder="placeholder"
      :value="defaultValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      @blur="$emit('blur')"
    />
    <div v-if="error" class="error_wrapper">
      <p>{{ error }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FormInputProps } from './FormInputProps'

const props = defineProps<FormInputProps<String>>()

const emit = defineEmits(['update:modelValue', 'blur'])
</script>
<style lang="css" scoped>
.input_wrapper {
  display: flex;
  flex-direction: row;
}

label {
  width: 8rem;
}

input {
  width: 12rem;
}

.error_wrapper p {
  margin: 0;
  position: absolute;
}
</style>
