<script setup>
import Navbar from './Navbar.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAppRoute = () => route.path.startsWith('/app');
</script>

<template>
  <div class="min-h-screen w-full bg-[#FDFDFD] text-[#111827] flex flex-col font-sans">
    
    <!-- Top Navbar em rotas logadas -->
    <Navbar v-if="isAppRoute()" />

    <main class="flex-1 w-full flex justify-center py-0 sm:py-8 lg:py-12">
      <slot></slot>
    </main>

  </div>
</template>

<style scoped>
</style>
