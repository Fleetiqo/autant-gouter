<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import StickyMobile from './components/StickyMobile.vue'
</script>

<template>
  <Navbar />
  <main class="pb-16 md:pb-0">
    <RouterView />
  </main>
  <Footer />
  <StickyMobile />
</template>
