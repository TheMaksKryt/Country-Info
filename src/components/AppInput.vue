<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const handleInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('update:modelValue', inputValue);
};

</script>
<template>
      <input
      class="block w-full rounded-md border-0 
      py-2 px-7 text-gray-900 
      ring-1 ring-inset 
      ring-gray-300 placeholder:text-gray-700 
      focus:ring-2 focus:ring-inset 
      focus:ring-indigo-600 
      sm:text-sm/6"
        type="text"
        :value="props.modelValue"
        @input="handleInput"
        :placeholder="props.placeholder"
      />
  </template>
  
