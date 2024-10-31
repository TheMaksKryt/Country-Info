<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    disabled?: boolean;
    severity?: string;
}>();
const buttonSeverityClasses = computed(() => {
    switch (props.severity) {
        case 'danger':
            return 'bg-red-200 text-gray-900 hover:bg-red-300'
        case 'warning':
            return 'bg-yellow-200 text-gray-900 hover:bg-yellow-300'
        case 'success':
            return 'bg-green-200 text-gray-900 hover:bg-green-300'
        default:
            return 'bg-gray-200 text-gray-900 hover:bg-gray-300'
    }
})
</script>
<template>
    <button type="button"
    :class="buttonSeverityClasses"
    class="rounded-md px-4 py-2 transition duration-200 
    ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400
    disabled:bg-gray-300 disabled:text-gray-600
    "
    @click="$emit('click')"
    :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>


<style scoped>

</style>