<script setup lang="ts">
import AppCard from './components/AppCard.vue';
</script>

<template>
  <div class="bg-surface flex flex-col justify-center items-center h-full p-[100px] max-md:p-[50px] max-sm:p-[20px]">
    <AppCard>
      <router-view  v-slot="{ Component }">
        <keep-alive 
        :exclude="['SelectedCountry']"
        >
          <component :is="Component" :key="$route.fullPath"></component>
        </keep-alive>
      </router-view>
    </AppCard>
  </div>
</template>

<style scoped>
</style>
