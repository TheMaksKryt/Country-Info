<script setup lang="ts">
import { computed } from 'vue';
import Holiday from './Holiday.vue';
import type { HolidayCountry } from '../../types';
import { useCountriesStore } from '../../store/store';
const store = useCountriesStore();
const holidays = computed<HolidayCountry[]>(() => store.holidays);
</script>

<template>
    <div class="flex flex-col gap-2 overflow-auto max-h-[400px]">
        <Holiday v-for="(holiday, index) in holidays" :key="index" :holiday="holiday" />
    </div>
</template>
