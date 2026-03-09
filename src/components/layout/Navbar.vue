<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const menuItems = [
  { label: 'Home', icon: '/imagens/house.png', route: '/app' },
  { label: 'Reservar', icon: '/imagens/calendar-clock.png', route: '/app/reservas' },
  { label: 'Studios', icon: '/imagens/land-plot.png', route: '/app/studios' },
  { label: 'Perfil', icon: '/imagens/user-round.png', route: '/app/perfil' }
];
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
    <div class="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between lg:justify-center lg:gap-24">
      <router-link
        v-for="item in menuItems"
        :key="item.label"
        :to="item.route"
        class="flex items-center gap-2 px-3 py-2 text-gray-800 hover:text-black transition-colors"
        :class="{'font-bold': route.path === item.route, 'font-medium': route.path !== item.route}"
      >
        <img :src="item.icon" :alt="item.label" class="w-5 h-5 object-contain opacity-80" :class="{'opacity-100': route.path === item.route}" />
        <span class="text-sm hidden sm:block">{{ item.label }}</span>
      </router-link>
    </div>
  </header>
</template>
