<script setup lang="ts">
import { computed } from 'vue';
import { useCountriesStore } from '../../store/store';
import type { HolidayCountry } from '../../types';
import RandomCountry from './RandomCountry.vue';

// Store setup
const store = useCountriesStore();
const countries = computed<HolidayCountry[]>(() => store.randomCountries);
</script>

<template>
    <h2 class="text-2xl mb-4">Random Countries Widget</h2>
    <div class="flex flex-col gap-2 border-2 border-gray-500 rounded-lg p-4 overflow-auto max-h-[440px]">
        <RandomCountry v-for="(holiday, index) in countries" :key="index" :holiday="holiday" />
    </div>
</template>
