<script setup lang="ts">
import type { HolidayCountry } from '../../types';
import AppItem from '../AppItem.vue';
const props = defineProps<{
    holiday: HolidayCountry;
}>();
</script>

<template>
    <AppItem>
        <div class="flex flex-col gap-2">
            <p>{{ holiday.name }}</p>
            <span>{{ holiday.date }}</span>
            <div class="flex items-center gap-1">
                <p>Type:</p>
                <span v-for="type in props.holiday.types" :key="type">
                    {{ type }}
                </span>
            </div>
        </div>
    </AppItem>
</template>
