<script setup lang="ts">
import { computed } from 'vue';
import type { HolidayCountry, Country } from '../../types';
import AppItem from '../AppItem.vue';
import { useCountriesStore } from '../../store/store';
const store = useCountriesStore();
const props = defineProps<{
    holiday: HolidayCountry;
}>();
const country = computed<Country | undefined>(() => store?.countries.find((country) => country.countryCode === props.holiday.countryCode));
</script>

<template>
    <AppItem>
        <div class="flex flex-col gap-2">
            <p>{{ country?.name }}</p>
            <span>{{ holiday.name }}</span>
            <span>{{ holiday.date }}</span>
        </div>
    </AppItem>
</template>
