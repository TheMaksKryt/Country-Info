<script setup lang="ts">
import Year from './Year.vue';
import { ref } from 'vue';
const emit = defineEmits(['changed'])
const props = defineProps({
  currentYear: { type: Number, required: true },
})
const startYear = 2020;
const endYear = 2030;

const yearIntervals = ref(
  Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i)
);
function toChangeYear(year: number) {
    emit('changed', year)
}
</script>

<template>
  <div class="flex w-full items-center flex-wrap gap-1">
    <Year @changed="toChangeYear" v-for="year in yearIntervals" :key="year" 
    :currentYear="props.currentYear"
    :year="year" />
  </div>
</template>