<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    year: number;
    currentYear: number;
}>();
const emit = defineEmits(['changed']);
function handleClick() {
    emit('changed', props.year);
}
const isSelectedYear = computed(() => props.currentYear === props.year);
</script>
<template>
    <button type="button" @click="handleClick" 
    :class="{'bg-gray-500 text-white': isSelectedYear}"
    class="border-2 border-gray-500 rounded-lg p-2 cursor-pointer hover:bg-gray-500 hover:text-white">
        {{ year }}
    </button>
</template>


