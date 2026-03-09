<script setup>
import { Search, Heart, ChevronRight } from 'lucide-vue-next';
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('.carousel').forEach(el => {
    // 1) Scroll horizontal com a roda do mouse (mais natural no desktop)
    el.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    }, { passive: false });

    // 2) Drag-to-scroll sem arrastar as imagens
    let isDown = false;
    let startX, scrollLeft;

    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.style.cursor = 'grabbing';
      el.style.scrollSnapType = 'none';
      el.querySelectorAll('img, a, button').forEach(child => {
        child.style.pointerEvents = 'none';
      });
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    const stopDrag = () => {
      if (!isDown) return;
      isDown = false;
      el.style.cursor = 'grab';
      el.querySelectorAll('img, a, button').forEach(child => {
        child.style.pointerEvents = '';
      });
      setTimeout(() => { el.style.scrollSnapType = ''; }, 80);
    };

    el.addEventListener('mouseleave', stopDrag);
    el.addEventListener('mouseup', stopDrag);

    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    });
  });
});
</script>

<template>
  <div class="w-full max-w-[600px] mx-auto bg-white rounded-[40px] shadow-custom flex flex-col font-sans">

    <!-- Seção 1: Header, busca e quick actions -->
    <div class="px-6 pt-10 pb-0">
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
            <img src="/images/ticket.png" alt="Acesso" class="w-5 h-5 object-contain opacity-80" />
            <span class="font-bold text-lg text-gray-900 leading-none">1/2</span>
          </div>
          <span class="text-[15px] text-gray-500 group-hover:text-gray-900 transition-colors">Acesso diário</span>
        </div>

        <!-- Créditos -->
        <div class="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:border-black transition-colors cursor-pointer group">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <img src="/images/badge-cent.png" alt="Creditos" class="w-5 h-5 object-contain opacity-80" />
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
              <div class="bg-[#111827] text-white text-[11px] font-bold py-1 uppercase tracking-widest">Dez</div>
              <div class="bg-white text-gray-900 text-xl font-bold py-1.5 leading-none">16</div>
            </div>
            <div>
              <h3 class="font-bold text-[15px] text-gray-900 leading-tight mb-1">Tonus Gym · Perdizes</h3>
              <p class="text-sm text-gray-500">Hoje, 19h15</p>
            </div>
          </div>
          <ChevronRight class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
        </div>
      </div>
    </div>

    <!-- Seção 2: Studios preferidos -->
    <div class="mb-8">
      <h2 class="text-lg font-bold text-gray-900 mb-4 px-6">Studios preferidos</h2>
      <div class="carousel carousel-studios">

        <!-- Pinheiros (com coração) -->
        <div class="carousel-item" style="min-width: 320px;">
          <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" alt="Pinheiros">
            <div class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Heart class="w-4 h-4 text-red-500 fill-red-500" />
            </div>
          </div>
          <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Pinheiros</h3>
          <p class="text-sm text-gray-500">Aberto agora · 350 m</p>
        </div>

        <!-- Moema -->
        <div class="carousel-item" style="min-width: 320px;">
          <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" alt="Moema">
          </div>
          <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Moema</h3>
          <p class="text-sm text-gray-500">Fechado agora · 350 m</p>
        </div>

        <!-- Vila Olímpia -->
        <div class="carousel-item" style="min-width: 320px; padding-right: 1.5rem;">
          <div class="relative w-full h-[160px] rounded-2xl overflow-hidden mb-3">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" alt="Vila Olímpia">
          </div>
          <h3 class="font-bold text-[15px] text-gray-900 mb-0.5">Vila Olímpia</h3>
          <p class="text-sm text-gray-500">Aberto agora · 1.2 km</p>
        </div>

      </div>
    </div>

    <!-- Seção 3: Explore as marcas -->
    <div class="mb-8">
      <h2 class="text-lg font-bold text-gray-900 mb-4 px-6">Explore as marcas</h2>
      <div class="carousel carousel-marcas">

        <!-- Tonus Gym -->
        <div class="carousel-item" style="min-width: 190px;">
          <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white font-black tracking-wider text-sm">TONUS<span class="font-normal text-[10px] ml-1">GYM</span></span>
            </div>
          </div>
        </div>

        <!-- Vidya Studio -->
        <div class="carousel-item" style="min-width: 190px;">
          <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
            <img src="/images/vidya.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white font-serif italic tracking-wider text-sm">VIDYA<span class="font-sans text-[10px] ml-1 not-italic">STUDIO</span></span>
            </div>
          </div>
        </div>

        <!-- Aera -->
        <div class="carousel-item" style="min-width: 190px;">
          <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/40"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white font-light tracking-[0.2em] text-sm">AERA</span>
            </div>
          </div>
        </div>

        <!-- Velocity -->
        <div class="carousel-item" style="min-width: 190px; padding-right: 1.5rem;">
          <div class="relative w-full h-[100px] rounded-2xl overflow-hidden">
            <img src="/images/Frame 1171278916.png" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/60"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white font-black tracking-widest text-sm uppercase">Velocity</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Seção 4: Eventos Especiais -->
    <div class="px-6 pb-10">
      <h2 class="text-lg font-bold text-gray-900 mb-4">Eventos especiais</h2>
      <div class="relative w-full h-[160px] rounded-[24px] overflow-hidden p-5 flex flex-col justify-between">
        <img src="/images/eventos-especiais.png" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 rounded-[24px]"></div>
        <div class="relative z-10 w-full mb-auto mt-2 text-white">
          <h3 class="text-2xl font-black italic tracking-wider leading-none mb-1"></h3>
          <p class="text-[13px] font-medium opacity-90"></p>
        </div>
        <div class="relative z-10 w-full text-white">
          <h4 class="text-xl font-black italic"></h4>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.shadow-custom {
  box-shadow: 0 1px 1px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
}

.carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 1.5rem;
  -webkit-overflow-scrolling: touch;
  padding-left: 1.5rem;
  padding-bottom: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
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
  user-select: none;
}
</style>
