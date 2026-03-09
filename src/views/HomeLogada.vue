<script setup>
import { Search, Heart, ChevronRight } from 'lucide-vue-next';
</script>

<template>
  <div class="w-full max-w-[600px] mx-auto bg-white rounded-[40px] shadow-md overflow-clip flex flex-col font-sans">
    
    <div class="px-6 pt-10 pb-6">
      <h1 class="text-[28px] font-bold text-gray-900 tracking-tight leading-8 mb-6">
        Onde você quer treinar hoje?
      </h1>

      <!-- Search Bar -->
      <div class="bg-[#F4F4F5] rounded-2xl flex items-center px-4 py-3 gap-3 mb-6">
        <Search class="w-5 h-5 text-gray-500" />
        <input 
          type="text" 
          placeholder="Buscar unidade" 
          class="bg-transparent border-none outline-none w-full text-[15px] placeholder-gray-500 text-gray-900" 
        />
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-2 gap-4 mb-8">
        <!-- Acesso diário -->
        <div class="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:border-black transition-colors cursor-pointer group">
          <div class="flex items-center gap-2 mb-2">
            <img src="/imagens/ticket.png" alt="Acesso" class="w-5 h-5 object-contain opacity-80" />
            <span class="font-bold text-lg text-gray-900 leading-none">1/2</span>
          </div>
          <span class="text-[15px] text-gray-500 group-hover:text-gray-900 transition-colors">Acesso diário</span>
        </div>

        <!-- Créditos -->
        <div class="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:border-black transition-colors cursor-pointer group">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <img src="/imagens/badge-cent.png" alt="Creditos" class="w-5 h-5 object-contain opacity-80" />
              <span class="font-bold text-lg text-gray-900 leading-none">184</span>
            </div>
            <ChevronRight class="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          </div>
          <span class="text-[15px] text-gray-500 group-hover:text-gray-900 transition-colors">Créditos</span>
        </div>
      </div>

      <!-- Próximo Treino -->
      <div class="mb-8">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Próximo treino</h2>
        <div class="border border-gray-200 rounded-2xl p-4 flex items-center justify-between hover:border-black transition-colors cursor-pointer group">
          <div class="flex items-center gap-4">
            <div class="border border-gray-200 rounded-xl overflow-hidden w-[60px] text-center shrink-0">
              <div class="bg-[#111827] text-white text-[11px] font-bold py-1 uppercase tracking-widest">
                Dez
              </div>
              <div class="bg-white text-gray-900 text-xl font-bold py-1.5 leading-none">
                16
              </div>
            </div>
            <div>
              <h3 class="font-bold text-[15px] text-gray-900 leading-tight mb-1">Tonus Gym · Perdizes</h3>
              <p class="text-sm text-gray-500">Hoje, 19h15</p>
            </div>
          </div>
          <ChevronRight class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
        </div>
      </div>

      <!-- Studios preferidos -->
      <div class="mb-8">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Studios preferidos</h2>
        <div class="carousel carousel-studios">
          
          <!-- Pinheiros (com coração) -->
          <div class="carousel-item" style="min-width: 340px; max-width: 340px;">
            <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
              <img src="/imagens/Frame 1171278916.png" class="w-full h-full object-cover" alt="Pinheiros">
              <div class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Heart class="w-4 h-4 text-red-500 fill-red-500" />
              </div>
            </div>
            <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Pinheiros</h3>
            <p class="text-sm text-gray-500">Aberto agora · 350 m</p>
          </div>

          <!-- Moema (sem coração) -->
          <div class="carousel-item" style="min-width: 340px; max-width: 340px;">
            <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
              <img src="/imagens/Frame 1171278916.png" class="w-full h-full object-cover" alt="Moema">
            </div>
            <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Moema</h3>
            <p class="text-sm text-gray-500">Fechado agora · 350 m</p>
          </div>

          <!-- Vila Olímpia -->
          <div class="carousel-item" style="min-width: 340px; max-width: 340px;">
            <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
              <img src="/imagens/Frame 1171278916.png" class="w-full h-full object-cover" alt="Vila Olímpia">
            </div>
            <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Vila Olímpia</h3>
            <p class="text-sm text-gray-500">Aberto agora · 1.2 km</p>
          </div>

        </div>
      </div>

      <!-- Explore as marcas -->
      <div class="mb-8">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Explore as marcas</h2>
        <div class="carousel carousel-marcas">
          
          <!-- Tonus Gym -->
          <div class="carousel-item" style="min-width: 200px; max-width: 200px;">
            <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
              <img src="/imagens/Frame 1171278916.png" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-black tracking-wider text-sm">TONUS<span class="font-normal text-[10px] ml-1">GYM</span></span>
              </div>
            </div>
          </div>

          <!-- Vidya Studio -->
          <div class="carousel-item" style="min-width: 200px; max-width: 200px;">
            <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
              <img src="/imagens/vidya.png" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/30"></div>
              <div class="absolute inset-0 flex items-center justify-center gap-2">
                <img src="/imagens/vidya.png" class="w-5 h-5 object-contain brightness-0 invert hidden" />
                <span class="text-white font-serif italic tracking-wider text-sm">VIDYA<span class="font-sans text-[10px] ml-1 not-italic">STUDIO</span></span>
              </div>
            </div>
          </div>

          <!-- Aera -->
          <div class="carousel-item" style="min-width: 200px; max-width: 200px;">
            <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
              <img src="/imagens/Frame 1171278916.png" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-white font-light tracking-[0.2em] text-sm">AERA</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Eventos Especiais -->
      <div class="mb-10">
        <h2 class="text-lg font-bold text-gray-900 mb-4">Eventos especiais</h2>
        <div class="relative w-full h-[160px] rounded-[24px] overflow-hidden bg-gradient-to-r from-black to-[#7A0D15] p-5 flex flex-col justify-between">
          <!-- Background image illusion se for colocar no futuro -->
          <div class="absolute inset-0 bg-black/20"></div>
          
          <div class="relative z-10 w-full mb-auto mt-2 text-white">
            <h3 class="text-2xl font-black italic tracking-wider leading-none mb-1">VELOWEEN</h3>
            <p class="text-[13px] font-medium opacity-90">Velocity Pinheiros</p>
          </div>

          <div class="relative z-10 w-full text-white">
            <h4 class="text-xl font-black italic">29 a 31 out</h4>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
.carousel-studios {
  gap: 1rem;
}
.carousel-marcas {
  gap: 0.75rem;
}
.carousel-item {
  flex-shrink: 0;
  scroll-snap-align: start;
}
</style>
