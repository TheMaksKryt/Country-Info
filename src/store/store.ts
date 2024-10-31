import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Country, HolidayCountry } from '../types';
import axios from 'axios';
// Interface for countries
export const useCountriesStore = defineStore('countries', () => {
    // Countries
    const countries = ref<Country[]>([]);
    const holidays = ref<HolidayCountry[]>([]);
    const randomCountries = ref<HolidayCountry[]>([]);
    async function getCountries() {
        try {
            const response = await axios.get<Country[]>('/api/AvailableCountries');
            countries.value = response.data; // get response
        } catch (error) {
            console.log('error', error);
        }
    }
    async function getCountry(year: number, countryCode: string) {
        try {
            const response = await axios.get<HolidayCountry[]>(`/api/PublicHolidays/${year}/${countryCode}`);
            holidays.value = response.data; // get response
        } catch (error) {
            console.log('error', error);
        }
    }
    async function getRandomCountries(countryCode: string) {
        try {
            const response = await axios.get<HolidayCountry[]>(`/api/NextPublicHolidays/${countryCode}`);
            randomCountries.value.push(...response.data); // get response
        } catch (error) {
            console.log('error', error);
        }
    }
    return { getCountries, getCountry, getRandomCountries, randomCountries, holidays, countries };
});
