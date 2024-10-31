<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue';
import { useCountriesStore } from '../store/store';
import type { HolidayCountry } from '../types';
import Years from '../components/YearsButton/Years.vue';
import AppButton from '../components/AppButton.vue';
import Holidays from '../components/Holidays/Holidays.vue';
const store = useCountriesStore();
const holidays = computed<HolidayCountry[]>(() => store.holidays);
const year = ref<number>(2024);
const code = ref<string>('');
function getCodeByURL(newYear?: number): void {
    if (newYear === year.value) return;
    if (newYear) year.value = newYear;
    const url: string = window.location.href;
    code.value = url.split('/').pop() || '';
    if (holidays.value[0]?.countryCode === code.value) return
    if (code.value) {
        store.getCountry(year.value, code.value);
    } else {
        console.error('Country code is not found in the URL');
    }
}
onBeforeMount(() => {
    getCodeByURL();
});
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex items-center gap-1">
            <AppButton @click="$router.back()" severity="success">Back</AppButton>
            <h2 class="text-2xl">Country - {{ code }}</h2>
        </div>
        <Holidays class="max-w-[400px]" />
        <Years @changed="getCodeByURL" :currentYear="year" />
    </div>
</template>
