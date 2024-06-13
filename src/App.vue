<template>
  <Navigation class="h-12" :class="`text-[#${theme.text}]`" />
  <main class="flex min-w-full min-h-screen pt-12" :class="`text-[#${theme.text}] bg-[#${theme.bg}]`">
    <router-view />
  </main>
  <!-- <a class="text-[#000] bg-[#fff] border-[#000]"></a> -->
  <!-- <a class="text-[#fff] bg-[#000] border-[#fff]"></a> -->
  <!-- <a class="text-[#0f0] bg-[#000] border-[#0f0]"></a> -->
</template>

<script setup lang="ts">
import { currentThemeData } from './Themes';
const theme = currentThemeData;

import Navigation from './components/Navigation.vue';
</script>

<style scoped>

</style>
