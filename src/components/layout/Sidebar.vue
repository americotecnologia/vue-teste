<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
  { label: 'Início', icon: 'pi pi-home', route: '/app' },
  { label: 'Buscar Turmas', icon: 'pi pi-search', route: '/app/buscar' },
  { label: 'Meus Treinos', icon: 'pi pi-calendar', route: '/app/treinos' },
];

const bottomItems = [
  { label: 'Configurações', icon: 'pi pi-cog', route: '/app/configuracoes' },
  { label: 'Sair', icon: 'pi pi-sign-out', route: '/' },
];
</script>

<template>
  <aside class="w-20 lg:w-64 h-screen bg-white border-r border-gray-200 flex flex-col justify-between py-6 sticky top-0 transition-all duration-300">
    <div class="flex flex-col items-center lg:items-start px-2 lg:px-6">
      <!-- Logo -->
      <div class="mb-10 lg:w-full flex justify-center lg:justify-start">
        <h2 class="text-2xl font-black text-[#111827] tracking-tighter">B<span class="hidden lg:inline">EON</span></h2>
      </div>

      <!-- Main Navigation -->
      <nav class="w-full space-y-2">
        <router-link
          v-for="item in menuItems"
          :key="item.label"
          :to="item.route"
          class="flex items-center justify-center lg:justify-start gap-4 p-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#111827] transition-all group relative"
          :class="{ 'bg-gray-100 text-[#111827] font-bold': route.path === item.route }"
        >
          <i :class="item.icon" class="text-xl"></i>
          <span class="hidden lg:block text-sm font-medium">{{ item.label }}</span>
          
          <!-- Tooltip for mobile -->
          <div class="lg:hidden absolute left-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
            {{ item.label }}
          </div>
        </router-link>
      </nav>
    </div>

    <!-- Bottom Navigation -->
    <div class="flex flex-col items-center lg:items-start px-2 lg:px-6 space-y-2">
      <router-link
        v-for="item in bottomItems"
        :key="item.label"
        :to="item.route"
        class="flex items-center justify-center lg:justify-start gap-4 p-3 w-full rounded-xl text-gray-500 hover:bg-gray-50 hover:text-red-600 transition-colors group relative"
      >
        <i :class="item.icon" class="text-xl"></i>
        <span class="hidden lg:block text-sm font-medium">{{ item.label }}</span>
      </router-link>
    </div>
  </aside>
</template>
