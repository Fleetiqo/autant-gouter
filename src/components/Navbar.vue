<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import SvgIcon from './SvgIcon.vue'

const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/menu', label: 'Menu' },
  { to: '/notre-histoire', label: 'Notre histoire' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-[#FEFDFB] shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2"
        @click="menuOpen = false"
      >
        <span
          :class="[
            'flex items-center gap-2 text-xl font-bold transition-colors',
            scrolled ? 'text-[#4A7C59]' : 'text-white drop-shadow-sm',
          ]"
          style="font-family: 'Nunito', sans-serif;"
        >
          <SvgIcon
            name="leaf"
            :class="['w-6 h-6 shrink-0', scrolled ? 'text-[#4A7C59]' : 'text-white']"
          />
          Autant Goûter
        </span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-6">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :class="[
            'text-sm font-semibold transition-colors border-b-2 border-transparent',
            scrolled
              ? route.path === link.to
                ? 'text-[#4A7C59] border-[#4A7C59]'
                : 'text-[#333333] hover:text-[#4A7C59]'
              : route.path === link.to
                ? 'text-white border-[#D4845A] drop-shadow-sm'
                : 'text-white/95 hover:text-[#D4845A] drop-shadow-sm',
          ]"
        >
          {{ link.label }}
        </RouterLink>
        <a
          href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 bg-[#D4845A] text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-[#c0734a] transition-colors"
        >
          Commander
          <SvgIcon name="truck" class="w-4 h-4" />
        </a>
      </div>

      <!-- Burger mobile -->
      <button
        :class="[
          'md:hidden p-2 transition-colors',
          scrolled ? 'text-[#4A7C59]' : 'text-white drop-shadow-sm',
        ]"
        @click="menuOpen = !menuOpen"
        aria-label="Menu"
      >
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-[#FEFDFB] border-t border-[#F5F0E8] px-4 py-4 flex flex-col gap-4">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="text-base font-semibold text-[#333333] hover:text-[#4A7C59]"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </RouterLink>
      <a
        href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center gap-2 bg-[#D4845A] text-white text-center font-bold px-4 py-3 rounded-full w-full"
        @click="menuOpen = false"
      >
        Commander via DoorDash
        <SvgIcon name="truck" class="w-5 h-5 shrink-0" />
      </a>
    </div>
  </nav>
</template>
