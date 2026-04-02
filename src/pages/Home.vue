<script setup>
const temoignages = [
  {
    texte: "La focaccia vaut vraiment le détour — même si vous n'avez pas nagé. Incroyable pour un café dans un centre sportif.",
    auteur: "Marie-Claude L.",
    note: "⭐⭐⭐⭐⭐"
  },
  {
    texte: "Les cookies chocolat-quinoa sont complètement addictifs. J'en ramène à chaque visite. Le rose matcha latte est une révélation.",
    auteur: "Patrick B.",
    note: "⭐⭐⭐⭐⭐"
  },
  {
    texte: "Jamais pensé trouver un café de cette qualité dans un aréna. La soupe après la piscine, c'est exactement ce qu'il faut.",
    auteur: "Sophie T.",
    note: "⭐⭐⭐⭐"
  },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200"
      alt="Latte art café Autant Goûter Sainte-Adèle"
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
      <p class="text-[#D4845A] font-semibold text-sm uppercase tracking-widest mb-4">🌿 Bio · Local · Fait maison</p>
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 leading-tight" style="font-family: 'Nunito', sans-serif;">
        Autant Goûter
      </h1>
      <p class="text-xl md:text-2xl font-semibold mb-2">
        Café-resto bio, bon et local à Sainte-Adèle
      </p>
      <p class="text-lg text-gray-200 mb-2">Tout cuisiné sur place. Recettes maison. Produits locaux.</p>
      <p class="text-xl text-[#D4845A] mb-8 italic" style="font-family: 'Lora', serif;">
        "Alors, autant goûter ?"
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/menu"
          class="bg-[#4A7C59] hover:bg-[#3a6347] text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
        >
          Découvrir le menu
        </RouterLink>
        <RouterLink
          to="/contact"
          class="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold px-8 py-4 rounded-full transition-colors text-lg border border-white/40"
        >
          Nous trouver
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- 3 colonnes highlights -->
  <section class="bg-[#FEFDFB] py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-extrabold text-center text-[#333333] mb-2" style="font-family: 'Nunito', sans-serif;">
        Ce qu'on fait bien
      </h2>
      <p class="text-center text-gray-500 mb-12">Tout est fait ici. Par nous. Avec de vrais ingrédients.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Focaccias -->
        <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
          <img
            src="https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800"
            alt="focaccia sandwich bio sainte-adele"
            class="w-full h-52 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">
              🥪 Focaccias & Sandwiches
            </h3>
            <p class="text-gray-600 text-sm">Grillés sur commande, garnis de frais. La focaccia qui vaut le détour — même sans aller nager.</p>
          </div>
        </div>
        <!-- Cafés -->
        <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
          <img
            src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800"
            alt="matcha latte cafe laurentides"
            class="w-full h-52 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">
              ☕ Cafés & Lattés
            </h3>
            <p class="text-gray-600 text-sm">Rose matcha, espresso, moka… et plus. Pas un café de machine — un vrai.</p>
          </div>
        </div>
        <!-- Douceurs -->
        <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800"
            alt="cookies maison centre sportif"
            class="w-full h-52 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">
              🍪 Douceurs maison
            </h3>
            <p class="text-gray-600 text-sm">Cookies quinoa-chocolat, brownies, pâtisseries. Faits ici, chaque matin.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Pas un café d'aréna ordinaire -->
  <section class="bg-[#F5F0E8] py-16 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-[#4A7C59] font-semibold text-sm uppercase tracking-widest mb-3">Notre différence</p>
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#333333] mb-6 leading-tight" style="font-family: 'Nunito', sans-serif;">
          De la vraie bouffe.<br>Faite ici. Par nous.
        </h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-4">
          Tout est cuisiné sur place, avec de vrais ingrédients. Bio, local, fait maison — zéro compromis, zéro raccourci.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Chaque soupe, chaque focaccia, chaque cookie sort de notre cuisine. Pas d'un sac, pas d'un congélateur industriel. C'est ça, la différence.
        </p>
        <p class="text-[#D4845A] text-lg italic" style="font-family: 'Lora', serif;">
          "Après le sport, la récompense."
        </p>
        <div class="mt-6 flex flex-wrap gap-3">
          <span class="bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-semibold px-4 py-2 rounded-full">🌱 Bio</span>
          <span class="bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-semibold px-4 py-2 rounded-full">📍 Local</span>
          <span class="bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-semibold px-4 py-2 rounded-full">👩‍🍳 Fait maison</span>
          <span class="bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-semibold px-4 py-2 rounded-full">🏒 Dans un centre sportif</span>
        </div>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
          alt="intérieur café Autant Goûter ambiance chaleureuse"
          class="w-full h-80 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- Témoignages -->
  <section class="bg-[#FEFDFB] py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-extrabold text-center text-[#333333] mb-2" style="font-family: 'Nunito', sans-serif;">
        Ce que vous en dites
      </h2>
      <p class="text-center text-gray-500 mb-12">⭐ 4.3/5 sur Google · 15 avis</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="t in temoignages"
          :key="t.auteur"
          class="bg-[#FFF8E7] rounded-2xl p-6 shadow-sm border border-[#F5F0E8]"
        >
          <p class="text-lg mb-1">{{ t.note }}</p>
          <p class="text-gray-700 italic text-sm leading-relaxed mb-4">"{{ t.texte }}"</p>
          <p class="text-[#4A7C59] font-semibold text-sm">— {{ t.auteur }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Bandeau horaires -->
  <section class="bg-[#4A7C59] text-white py-12 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <p class="text-2xl mb-2">🕐</p>
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Nunito', sans-serif;">Horaires</h3>
        <p class="text-green-100 text-sm">Lun – Jeu : 7h30 – 19h00</p>
        <p class="text-green-100 text-sm">Vendredi : 7h30 – 20h00</p>
        <p class="text-green-100 text-sm">Sam – Dim : 8h30 – 16h00</p>
      </div>
      <div>
        <p class="text-2xl mb-2">📍</p>
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Nunito', sans-serif;">Adresse</h3>
        <p class="text-green-100 text-sm">252 Bd de Sainte-Adèle</p>
        <p class="text-green-100 text-sm">Centre sportif Pays-d'en-Haut</p>
        <p class="text-green-100 text-sm">Sainte-Adèle, QC J8B 0K6</p>
      </div>
      <div>
        <p class="text-2xl mb-2">🛵</p>
        <h3 class="font-bold text-lg mb-2" style="font-family: 'Nunito', sans-serif;">Livraison</h3>
        <p class="text-green-100 text-sm mb-4">Disponible via DoorDash</p>
        <a
          href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
          target="_blank"
          rel="noopener"
          class="bg-[#D4845A] hover:bg-[#c0734a] text-white font-bold px-6 py-2 rounded-full transition-colors text-sm inline-block"
        >
          Commander maintenant
        </a>
      </div>
    </div>
    <div class="text-center mt-8">
      <a
        href="https://maps.google.com/?q=252+Boulevard+de+Sainte-Adèle,+Sainte-Adèle,+QC"
        target="_blank"
        rel="noopener"
        class="text-green-200 hover:text-white text-sm underline transition-colors"
      >
        📍 Voir sur Google Maps →
      </a>
    </div>
  </section>

  <!-- CTA final -->
  <section class="bg-[#F5F0E8] py-16 px-4 text-center">
    <h2 class="text-3xl font-extrabold text-[#333333] mb-4" style="font-family: 'Nunito', sans-serif;">
      Rose matcha latte, cookies chocolat-quinoa, soupe du jour...
    </h2>
    <p class="text-2xl text-[#D4845A] italic mb-8" style="font-family: 'Lora', serif;">
      Alors, autant goûter ?
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <RouterLink
        to="/menu"
        class="bg-[#4A7C59] hover:bg-[#3a6347] text-white font-bold px-8 py-4 rounded-full transition-colors"
      >
        Voir le menu complet
      </RouterLink>
      <RouterLink
        to="/contact"
        class="bg-[#6F4E37] hover:bg-[#5a3e2b] text-white font-bold px-8 py-4 rounded-full transition-colors"
      >
        Commande traiteur
      </RouterLink>
    </div>
  </section>
</template>
