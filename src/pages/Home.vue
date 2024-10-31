<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { useCountriesStore } from '../store/store';
import AppInput from '../components/AppInput.vue';
import AppButton from '../components/AppButton.vue';
import CountriesList from '../components/CountriesList/CountriesList.vue';
import RandomCountriesWidget from '../components/RandomCountriesWidget/RandomCountriesWidget.vue';
import type { Country, HolidayCountry } from '../types';
const store = useCountriesStore();
const countries = computed<Country[]>(() => store.countries);
const randomCountries = computed<HolidayCountry[]>(() => store.randomCountries);
const countryName = ref('');
onBeforeMount(async () => {
    // Получаем все страны
    if (!countries.value.length) {
        await store.getCountries();
    }
    if (!randomCountries.value.length) {
        await store.getCountries();
    }
    const randomCountryCodes = getRandomCountryCodes(store.countries, 3);
    await Promise.all(randomCountryCodes.map((code) => store.getRandomCountries(code)));
});

function getRandomCountryCodes(countries: Country[], count: number): string[] {
    const countryCodes = countries.map((country) => country.countryCode);
    const selectedCodes: string[] = [];

    while (selectedCodes.length < count) {
        const randomIndex = Math.floor(Math.random() * countryCodes.length);
        const randomCode = countryCodes[randomIndex];
        if (!selectedCodes.includes(randomCode)) {
            selectedCodes.push(randomCode);
        }
    }

    return selectedCodes;
}
</script>
<template>
    <div class="lg:flex w-full gap-4">
        <div class="flex flex-col gap-2 w-full max-w-[400px] max-lg:mb-4">
            <div class="flex items-center gap-1">
                <AppInput v-model="countryName" placeholder="Input Country code" />
                <AppButton severity="danger" @click="countryName = ''" :disabled="!countryName">Clear</AppButton>
            </div>
            <CountriesList :filterValue="countryName" />
        </div>
        <div class="flex flex-col gap-2 w-full">
            <RandomCountriesWidget />
        </div>
    </div>
</template>
