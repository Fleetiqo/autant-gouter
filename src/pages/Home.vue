<script setup>
import SvgIcon from '../components/SvgIcon.vue'

const highlights = [
  {
    title: 'Focaccias et sandwiches',
    text: 'Grillés sur commande, garnis au frais. La focaccia qui vaut le détour — même sans aller nager.',
    img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800',
    alt: 'Focaccia et sandwich bio à Sainte-Adèle',
    icon: 'fire',
  },
  {
    title: 'Cafés et lattés',
    text: 'Rose matcha, espresso, moka… et bien plus. Pas un café de machine — un vrai.',
    img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800',
    alt: 'Boissons café et matcha aux Laurentides',
    icon: 'mug',
  },
  {
    title: 'Douceurs maison',
    text: 'Cookies quinoa-chocolat, brownies, pâtisseries. Préparés ici, chaque matin.',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800',
    alt: 'Pâtisseries et biscuits maison',
    icon: 'cookie',
  },
]

const valeurs = [
  { label: 'Bio', icon: 'leaf' },
  { label: 'Local', icon: 'mapPin' },
  { label: 'Fait maison', icon: 'home' },
  { label: 'Centre sportif', icon: 'building' },
]

const temoignages = [
  {
    texte: "La focaccia vaut vraiment le détour — même si vous n'avez pas nagé. Incroyable pour un café dans un centre sportif.",
    auteur: 'Marie-Claude L.',
    stars: 5,
  },
  {
    texte: "Les cookies chocolat-quinoa sont complètement addictifs. J'en ramène à chaque visite. Le rose matcha latte est une révélation.",
    auteur: 'Patrick B.',
    stars: 5,
  },
  {
    texte: "Jamais pensé trouver un café de cette qualité dans un aréna. La soupe après la piscine, c'est exactement ce qu'il faut.",
    auteur: 'Sophie T.',
    stars: 4,
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600"
      alt="Latte art au café Autant Goûter à Sainte-Adèle"
      class="absolute inset-0 w-full h-full object-cover scale-105"
      loading="eager"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/65"
      aria-hidden="true"
    />
    <div class="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-8 pb-20 md:pb-24">
      <p
        class="inline-flex items-center justify-center gap-2 text-[#D4845A] font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-6"
      >
        <SvgIcon name="leaf" class="w-4 h-4 shrink-0 opacity-90" />
        <span>Bio</span>
        <span class="h-1 w-1 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
        <span>Local</span>
        <span class="h-1 w-1 shrink-0 rounded-full bg-current opacity-60" aria-hidden="true" />
        <span>Fait maison</span>
      </p>
      <h1
        class="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-5 leading-[1.1] tracking-tight"
        style="font-family: 'Nunito', sans-serif;"
      >
        Autant Goûter
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl font-semibold text-white/95 mb-3 max-w-xl mx-auto">
        Café-resto bio, bon et local à Sainte-Adèle
      </p>
      <p class="text-base md:text-lg text-gray-200 mb-6 max-w-lg mx-auto leading-relaxed">
        Tout cuisiné sur place. Recettes maison. Produits locaux.
      </p>
      <p class="text-lg md:text-xl text-[#D4845A] mb-10 italic" style="font-family: 'Lora', serif;">
        « Alors, autant goûter ? »
      </p>
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
        <RouterLink
          to="/menu"
          class="group inline-flex items-center justify-center gap-2 bg-[#4A7C59] hover:bg-[#3d6a4b] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-black/20 text-base md:text-lg"
        >
          Découvrir le menu
          <SvgIcon
            name="arrowRight"
            class="w-5 h-5 transition-transform group-hover:translate-x-0.5"
          />
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold px-8 py-4 rounded-2xl transition-colors text-base md:text-lg border border-white/35"
        >
          Nous trouver
        </RouterLink>
      </div>
    </div>
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden sm:flex flex-col items-center gap-1"
      aria-hidden="true"
    >
      <span class="text-[10px] uppercase tracking-widest">Défiler</span>
      <SvgIcon name="chevronDown" class="w-5 h-5" />
    </div>
  </section>

  <!-- Highlights -->
  <section class="relative bg-[#FEFDFB] py-20 md:py-24 px-4">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4A7C59]/20 to-transparent" />
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-14 md:mb-16">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-[#333333] mb-3"
          style="font-family: 'Nunito', sans-serif;"
        >
          Ce qu'on fait bien
        </h2>
        <p class="text-gray-600 text-base md:text-lg leading-relaxed">
          Tout est fait ici, par nous, avec de vrais ingrédients — sans compromis.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        <article
          v-for="item in highlights"
          :key="item.title"
          class="group bg-white rounded-3xl overflow-hidden border border-[#F5F0E8] shadow-[0_4px_24px_-4px_rgba(74,124,89,0.12)] hover:shadow-[0_12px_40px_-8px_rgba(74,124,89,0.2)] transition-shadow duration-300"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              :src="item.img"
              :alt="item.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div
              class="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-[#4A7C59] shadow-md backdrop-blur-sm"
            >
              <SvgIcon :name="item.icon" class="w-5 h-5" />
            </div>
          </div>
          <div class="p-7">
            <h3
              class="text-xl font-bold text-[#333333] mb-2 leading-snug"
              style="font-family: 'Nunito', sans-serif;"
            >
              {{ item.title }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ item.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Différence -->
  <section class="bg-[#F5F0E8] py-20 md:py-24 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="order-2 lg:order-1">
        <p class="text-[#4A7C59] font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Notre différence
        </p>
        <h2
          class="text-3xl md:text-4xl font-extrabold text-[#333333] mb-6 leading-tight"
          style="font-family: 'Nunito', sans-serif;"
        >
          De la vraie bouffe. Faite ici, par nous.
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-4">
          Tout est cuisiné sur place, avec de vrais ingrédients. Bio, local, fait maison — zéro compromis, zéro raccourci.
        </p>
        <p class="text-gray-600 leading-relaxed mb-8">
          Chaque soupe, chaque focaccia, chaque biscuit sort de notre cuisine. Pas d'un sac industriel. C'est ça, la différence.
        </p>
        <p class="text-[#D4845A] text-lg italic border-l-4 border-[#D4845A]/40 pl-4" style="font-family: 'Lora', serif;">
          « Après le sport, la récompense. »
        </p>
        <ul class="mt-8 flex flex-wrap gap-2.5">
          <li
            v-for="v in valeurs"
            :key="v.label"
            class="inline-flex items-center gap-2 rounded-full bg-[#4A7C59]/12 text-[#2d4a36] text-sm font-semibold px-4 py-2.5 border border-[#4A7C59]/15"
          >
            <SvgIcon :name="v.icon" class="w-4 h-4 text-[#4A7C59]" />
            {{ v.label }}
          </li>
        </ul>
      </div>
      <div class="order-1 lg:order-2">
        <div
          class="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 aspect-[4/3] max-h-[420px] lg:max-h-none"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000"
            alt="Ambiance chaleureuse du café Autant Goûter"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Témoignages -->
  <section class="bg-[#FEFDFB] py-20 md:py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 md:mb-14">
        <h2
          class="text-3xl md:text-4xl font-extrabold text-[#333333] mb-3"
          style="font-family: 'Nunito', sans-serif;"
        >
          Ce que vous en dites
        </h2>
        <p class="text-gray-600 flex flex-wrap items-center justify-center gap-2">
          <span class="inline-flex items-center gap-1 text-[#D4845A]" aria-hidden="true">
            <SvgIcon v-for="n in 5" :key="n" name="starFilled" class="w-4 h-4" />
          </span>
          <span class="text-sm md:text-base">4,3 sur 5 sur Google · 15 avis</span>
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <figure
          v-for="t in temoignages"
          :key="t.auteur"
          class="relative bg-white rounded-3xl p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border border-[#F5F0E8] flex flex-col"
        >
          <div class="flex gap-0.5 text-[#D4845A] mb-4" :aria-label="`${t.stars} sur 5`">
            <SvgIcon v-for="s in t.stars" :key="s" name="starFilled" class="w-4 h-4" />
          </div>
          <blockquote class="text-gray-700 text-sm leading-relaxed mb-6 grow italic">
            « {{ t.texte }} »
          </blockquote>
          <figcaption class="text-[#4A7C59] font-semibold text-sm">
            — {{ t.auteur }}
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Infos pratiques -->
  <section class="relative bg-[#4A7C59] text-white py-16 md:py-20 px-4 overflow-hidden">
    <div
      class="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"
      aria-hidden="true"
    />
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center relative">
      <div class="flex flex-col items-center">
        <div
          class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20"
        >
          <SvgIcon name="clock" class="w-7 h-7" />
        </div>
        <h3 class="font-bold text-lg mb-3" style="font-family: 'Nunito', sans-serif;">Horaires</h3>
        <p class="text-green-100/95 text-sm leading-relaxed">Lun – Jeu : 7h30 – 19h00</p>
        <p class="text-green-100/95 text-sm leading-relaxed">Vendredi : 7h30 – 20h00</p>
        <p class="text-green-100/95 text-sm leading-relaxed">Sam – Dim : 8h30 – 16h00</p>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20"
        >
          <SvgIcon name="mapPin" class="w-7 h-7" />
        </div>
        <h3 class="font-bold text-lg mb-3" style="font-family: 'Nunito', sans-serif;">Adresse</h3>
        <p class="text-green-100/95 text-sm leading-relaxed">252 Bd de Sainte-Adèle</p>
        <p class="text-green-100/95 text-sm leading-relaxed">Centre sportif Pays-d'en-Haut</p>
        <p class="text-green-100/95 text-sm leading-relaxed">Sainte-Adèle, QC J8B 0K6</p>
      </div>
      <div class="flex flex-col items-center">
        <div
          class="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20"
        >
          <SvgIcon name="truck" class="w-7 h-7" />
        </div>
        <h3 class="font-bold text-lg mb-3" style="font-family: 'Nunito', sans-serif;">Livraison</h3>
        <p class="text-green-100/95 text-sm mb-5 max-w-xs">Disponible via DoorDash</p>
        <a
          href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 bg-[#D4845A] hover:bg-[#c0734a] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-black/15"
        >
          Commander maintenant
          <SvgIcon name="arrowRight" class="w-4 h-4" />
        </a>
      </div>
    </div>
    <div class="text-center mt-12">
      <a
        href="https://maps.google.com/?q=252+Boulevard+de+Sainte-Adèle,+Sainte-Adèle,+QC"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 text-green-100 hover:text-white text-sm font-medium transition-colors"
      >
        <SvgIcon name="mapPin" class="w-4 h-4 shrink-0" />
        Voir sur Google Maps
        <SvgIcon name="arrowRight" class="w-3.5 h-3.5 opacity-80" />
      </a>
    </div>
  </section>

  <!-- CTA final -->
  <section class="bg-[#F5F0E8] py-16 md:py-20 px-4">
    <div class="max-w-3xl mx-auto text-center rounded-3xl bg-[#FEFDFB] border border-[#E8E0D4] px-6 py-12 md:px-12 md:py-14 shadow-[0_8px_40px_-12px_rgba(74,124,89,0.15)]">
      <h2
        class="text-2xl md:text-3xl font-extrabold text-[#333333] mb-4 leading-snug"
        style="font-family: 'Nunito', sans-serif;"
      >
        Rose matcha, cookies quinoa-chocolat, soupe du jour…
      </h2>
      <p class="text-xl md:text-2xl text-[#D4845A] italic mb-8" style="font-family: 'Lora', serif;">
        Alors, autant goûter ?
      </p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <RouterLink
          to="/menu"
          class="inline-flex items-center justify-center gap-2 bg-[#4A7C59] hover:bg-[#3d6a4b] text-white font-bold px-8 py-4 rounded-2xl transition-colors"
        >
          Voir le menu complet
        </RouterLink>
        <RouterLink
          to="/contact"
          class="inline-flex items-center justify-center border-2 border-[#6F4E37] text-[#6F4E37] hover:bg-[#6F4E37] hover:text-white font-bold px-8 py-4 rounded-2xl transition-colors"
        >
          Commande traiteur
        </RouterLink>
      </div>
    </div>
  </section>
</template>
