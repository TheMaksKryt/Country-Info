<script setup lang="ts">
import type { Country } from '../../types';
const emit = defineEmits(['select']);
const props = defineProps<{
  country: Country;
}>();

function handleClick() {
  emit('select', props.country);
}
</script>

<template>
  <button type="button" 
    class="border-2 border-gray-500 rounded-lg p-4 cursor-pointer py-4 hover:bg-gray-500 hover:text-white" 
    @click="handleClick"
  >
    {{ country.name }}
  </button>
</template>