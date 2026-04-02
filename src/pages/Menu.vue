<script setup>
import { ref } from 'vue'
import { menuCategories } from '../data/menu.js'

const activeCategory = ref(null)

function scrollTo(id) {
  activeCategory.value = id
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <!-- Hero menu -->
  <section class="relative pt-16">
    <div class="relative h-64 md:h-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1553909489-cd47e0907980?w=1200"
        alt="focaccia sandwich bio sainte-adele menu"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-3" style="font-family: 'Nunito', sans-serif;">
            Notre menu
          </h1>
          <p class="text-lg text-gray-200">Tout fait maison. Tout cuisiné sur place.</p>
          <p class="text-[#D4845A] italic mt-2" style="font-family: 'Lora', serif;">
            "Menu sujet à changement selon les arrivages."
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Navigation catégories -->
  <div class="sticky top-16 z-40 bg-[#FEFDFB] border-b border-[#F5F0E8] shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
      <button
        v-for="cat in menuCategories"
        :key="cat.id"
        @click="scrollTo(cat.id)"
        :class="[
          'whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full transition-colors flex-shrink-0',
          activeCategory === cat.id
            ? 'bg-[#4A7C59] text-white'
            : 'bg-[#F5F0E8] text-[#333333] hover:bg-[#4A7C59]/10'
        ]"
      >
        {{ cat.nom }}
      </button>
    </div>
  </div>

  <!-- Catégories -->
  <div class="bg-[#FEFDFB] pb-24">
    <div class="max-w-6xl mx-auto px-4">
      <div
        v-for="(cat, index) in menuCategories"
        :key="cat.id"
        :id="cat.id"
        :class="['py-14', index % 2 === 1 ? 'bg-[#F5F0E8] -mx-4 px-4' : '']"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <!-- Image -->
          <div :class="index % 2 === 1 ? 'md:order-2' : ''">
            <img
              :src="cat.image"
              :alt="cat.imageAlt"
              class="w-full h-64 object-cover rounded-2xl shadow-lg"
              loading="lazy"
            />
          </div>
          <!-- Items -->
          <div :class="index % 2 === 1 ? 'md:order-1' : ''">
            <h2 class="text-2xl font-extrabold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">
              {{ cat.nom }}
            </h2>
            <p class="text-gray-500 text-sm mb-6 italic">{{ cat.description }}</p>
            <div class="space-y-4">
              <div
                v-for="item in cat.items"
                :key="item.nom"
                class="bg-[#FFF8E7] rounded-xl p-4 border border-[#F5F0E8]"
              >
                <div class="flex justify-between items-start gap-2">
                  <h3 class="font-bold text-[#333333]" style="font-family: 'Nunito', sans-serif;">
                    {{ item.nom }}
                  </h3>
                  <span v-if="item.prix" class="text-[#D4845A] font-bold text-sm whitespace-nowrap">
                    {{ item.prix }}
                  </span>
                </div>
                <p class="text-gray-500 text-sm mt-1">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Note + DoorDash CTA -->
  <section class="bg-[#4A7C59] text-white py-12 px-4 text-center">
    <p class="text-green-100 text-sm mb-2">🌿 Menu sujet à changement selon les arrivages. Tout est fait maison !</p>
    <h2 class="text-2xl font-extrabold mb-4" style="font-family: 'Nunito', sans-serif;">
      Envie de commander en livraison ?
    </h2>
    <a
      href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
      target="_blank"
      rel="noopener"
      class="inline-block bg-[#D4845A] hover:bg-[#c0734a] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
    >
      🛵 Commandez en livraison via DoorDash
    </a>
  </section>
</template>
