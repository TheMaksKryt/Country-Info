<script setup lang="ts">
import { computed } from 'vue';
import Countries from './Countries.vue';
import { useCountriesStore } from '../../store/store';
import type { Country } from '../../types';

// Props
const props = defineProps<{
  filterValue: string;
}>();

// Store setup
const store = useCountriesStore();
const countries = computed<Country[]>(() => store.countries);

// Computed property for filtered countries
const filteredCountries = computed(() => 
  countries.value.filter((country) => {
    const countryName = country.name?.toLowerCase();
    const filterValue = props.filterValue?.toLowerCase();
    
    return filterValue ? countryName?.includes(filterValue) : true
  })
);
</script>

<template>
  <h2 class="text-2xl mb-4">
    Countries List
  </h2>
  <!-- Render the Countries component with filtered countries -->
  <Countries v-if="filteredCountries" :countries="filteredCountries" />
  <h3 v-else class="text-xl text-red-500">
    No countries found
  </h3>
</template>
