<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToApp = () => {
    router.push('/app');
};
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center h-full min-h-[80vh]">
    <h1 class="text-4xl md:text-6xl font-extrabold text-[#111827] mb-4 tracking-tight text-center">
      BEON <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">Studios</span>
    </h1>
    <p class="text-lg md:text-xl text-gray-500 max-w-2xl text-center mb-10 leading-relaxed font-medium">
      O ecossistema high-end de experiências de bem-estar e treinos coletivos do Grupo Smart Fit.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
      <button 
        @click="goToApp"
        class="bg-[#111827] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
        Acessar Área de Membros
      </button>
      <button class="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold hover:border-black hover:bg-gray-50 transition-all">
        Seja um Membro
      </button>
    </div>
  </div>
</template>
