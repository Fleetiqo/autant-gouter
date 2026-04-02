<template>
  <footer class="bg-[#333333] text-white pt-12 pb-6">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Marque -->
        <div>
          <h3 class="text-xl font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">
            🌿 Autant Goûter
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-3">
            Café-restaurant bio, bon et local.<br>
            Tout cuisiné sur place, avec de vrais ingrédients.
          </p>
          <p class="text-[#D4845A] italic text-sm" style="font-family: 'Lora', serif;">
            "Alors, autant goûter ?"
          </p>
        </div>

        <!-- Horaires -->
        <div>
          <h4 class="font-bold text-white mb-3 text-sm uppercase tracking-wide">Horaires</h4>
          <ul class="text-gray-400 text-sm space-y-1">
            <li>Lun – Jeu : 7h30 – 19h00</li>
            <li>Vendredi : 7h30 – 20h00</li>
            <li>Sam – Dim : 8h30 – 16h00</li>
          </ul>
          <div class="mt-4">
            <a
              href="tel:5148332707"
              class="text-[#D4845A] font-semibold hover:text-[#e09070] transition-colors"
            >
              📞 514-833-2707
            </a>
          </div>
        </div>

        <!-- Adresse & liens -->
        <div>
          <h4 class="font-bold text-white mb-3 text-sm uppercase tracking-wide">Nous trouver</h4>
          <p class="text-gray-400 text-sm mb-1">252 Bd de Sainte-Adèle</p>
          <p class="text-gray-400 text-sm mb-3">Centre sportif Pays-d'en-Haut<br>Sainte-Adèle, QC J8B 0K6</p>
          <div class="flex flex-col gap-2">
            <a
              href="https://maps.google.com/?q=252+Boulevard+de+Sainte-Adèle,+Sainte-Adèle,+QC"
              target="_blank"
              rel="noopener"
              class="text-sm text-[#4A7C59] hover:text-green-400 transition-colors"
            >
              📍 Voir sur Google Maps
            </a>
            <a
              href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
              target="_blank"
              rel="noopener"
              class="text-sm text-[#D4845A] hover:text-[#e09070] transition-colors"
            >
              🛵 Commander via DoorDash
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        © {{ new Date().getFullYear() }} Autant Goûter — Sainte-Adèle, Québec
      </div>
    </div>
  </footer>
</template>
