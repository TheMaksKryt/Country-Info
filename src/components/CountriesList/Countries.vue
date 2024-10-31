<script setup lang="ts">
import Countries from './Country.vue';
import type { Country } from '../../types';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    countries: Array<Country>
})
const toRedirect = (country: Country) => {
    router.push(`/country/${country.countryCode}`);
}
</script>

<template>
    <div class="flex flex-col gap-2 overflow-auto max-h-[400px]">
        <Countries 
        @select='toRedirect'
        v-for="country in props.countries" :key="country.id" :country="country" />
    </div>
</template>