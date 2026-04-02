<script setup>
import { ref, reactive } from 'vue'
import { useContact } from '../composables/useContact.js'

const { loading, success, error, submitContact } = useContact()

const form = reactive({
  nom: '',
  telephone: '',
  type_demande: 'Contact',
  message: '',
})

async function handleSubmit() {
  await submitContact({ ...form })
  if (success.value) {
    form.nom = ''
    form.telephone = ''
    form.type_demande = 'Contact'
    form.message = ''
  }
}
</script>

<template>
  <!-- Hero -->
  <section class="relative pt-16">
    <div class="relative h-56 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
        alt="café Autant Goûter Sainte-Adèle contact"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/55 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-2" style="font-family: 'Nunito', sans-serif;">
            Contact & Traiteur
          </h1>
          <p class="text-gray-200">On vous revient rapidement.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-[#FEFDFB] py-16 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Infos -->
      <div>
        <h2 class="text-2xl font-extrabold text-[#333333] mb-6" style="font-family: 'Nunito', sans-serif;">
          Nous trouver
        </h2>

        <!-- Adresse -->
        <div class="bg-[#F5F0E8] rounded-2xl p-6 mb-6">
          <div class="flex items-start gap-4 mb-4">
            <span class="text-2xl">📍</span>
            <div>
              <p class="font-bold text-[#333333]">Autant Goûter</p>
              <p class="text-gray-600 text-sm">252 Boulevard de Sainte-Adèle</p>
              <p class="text-gray-600 text-sm">Centre sportif Pays-d'en-Haut</p>
              <p class="text-gray-600 text-sm">Sainte-Adèle, QC J8B 0K6</p>
              <p class="text-[#4A7C59] text-sm mt-1 font-medium">Nous sommes situés à l'intérieur du Centre sportif Pays-d'en-Haut</p>
            </div>
          </div>
          <div class="flex items-center gap-4 mb-4">
            <span class="text-2xl">📞</span>
            <a href="tel:5148332707" class="text-[#D4845A] font-bold text-lg hover:text-[#c0734a] transition-colors">
              514-833-2707
            </a>
          </div>
          <a
            href="https://maps.google.com/?q=252+Boulevard+de+Sainte-Adèle,+Sainte-Adèle,+QC"
            target="_blank"
            rel="noopener"
            class="inline-block bg-[#4A7C59] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-[#3a6347] transition-colors"
          >
            📍 Voir sur Google Maps
          </a>
        </div>

        <!-- Horaires -->
        <div class="bg-[#FFF8E7] rounded-2xl p-6 mb-6">
          <h3 class="font-bold text-[#333333] mb-4 flex items-center gap-2" style="font-family: 'Nunito', sans-serif;">
            🕐 Horaires d'ouverture
          </h3>
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-[#F5F0E8]">
                <td class="py-2 text-gray-600">Lundi – Jeudi</td>
                <td class="py-2 font-semibold text-right">7h30 – 19h00</td>
              </tr>
              <tr class="border-b border-[#F5F0E8]">
                <td class="py-2 text-gray-600">Vendredi</td>
                <td class="py-2 font-semibold text-right">7h30 – 20h00</td>
              </tr>
              <tr>
                <td class="py-2 text-gray-600">Samedi – Dimanche</td>
                <td class="py-2 font-semibold text-right">8h30 – 16h00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- DoorDash -->
        <div class="bg-[#D4845A]/10 rounded-2xl p-6 mb-6">
          <h3 class="font-bold text-[#333333] mb-2 flex items-center gap-2" style="font-family: 'Nunito', sans-serif;">
            🛵 Livraison disponible
          </h3>
          <p class="text-gray-600 text-sm mb-4">Commandez en livraison via DoorDash — directement depuis chez vous.</p>
          <a
            href="https://www.doordash.com/store/autant-go%C3%BBter-sainte-ad%C3%A8le-27829588/"
            target="_blank"
            rel="noopener"
            class="inline-block bg-[#D4845A] hover:bg-[#c0734a] text-white font-bold px-6 py-3 rounded-full transition-colors"
          >
            Commander via DoorDash
          </a>
        </div>

        <!-- Google Maps embed -->
        <div class="rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.5!2d-74.1300!3d45.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccf3b0000000001%3A0x1!2s252+Bd+de+Sainte-Ad%C3%A8le%2C+Sainte-Ad%C3%A8le%2C+QC+J8B+0K6!5e0!3m2!1sfr!2sca!4v1"
            width="100%"
            height="250"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Carte Autant Goûter Sainte-Adèle"
          ></iframe>
        </div>
      </div>

      <!-- Formulaire -->
      <div>
        <h2 class="text-2xl font-extrabold text-[#333333] mb-2" style="font-family: 'Nunito', sans-serif;">
          Écrivez-nous
        </h2>
        <p class="text-gray-500 text-sm mb-6">Contact, commande traiteur, événement — on vous revient rapidement.</p>

        <!-- Succès -->
        <div v-if="success" class="bg-[#4A7C59]/10 border border-[#4A7C59] rounded-2xl p-6 text-center mb-6">
          <p class="text-3xl mb-2">✅</p>
          <p class="text-[#4A7C59] font-bold text-lg" style="font-family: 'Nunito', sans-serif;">Merci !</p>
          <p class="text-gray-600 text-sm">On vous revient rapidement.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-5">
          <!-- Nom -->
          <div>
            <label class="block text-sm font-semibold text-[#333333] mb-1" for="nom">Nom *</label>
            <input
              id="nom"
              v-model="form.nom"
              type="text"
              required
              placeholder="Votre nom"
              class="w-full border border-[#F5F0E8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7C59] bg-white"
            />
          </div>

          <!-- Téléphone -->
          <div>
            <label class="block text-sm font-semibold text-[#333333] mb-1" for="telephone">Téléphone</label>
            <input
              id="telephone"
              v-model="form.telephone"
              type="tel"
              placeholder="514-000-0000"
              class="w-full border border-[#F5F0E8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7C59] bg-white"
            />
          </div>

          <!-- Type de demande -->
          <div>
            <label class="block text-sm font-semibold text-[#333333] mb-1" for="type">Type de demande *</label>
            <select
              id="type"
              v-model="form.type_demande"
              required
              class="w-full border border-[#F5F0E8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7C59] bg-white"
            >
              <option value="Contact">Contact général</option>
              <option value="Commande traiteur">Commande traiteur</option>
              <option value="Événement">Événement</option>
            </select>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-sm font-semibold text-[#333333] mb-1" for="message">Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              placeholder="Votre message..."
              class="w-full border border-[#F5F0E8] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4A7C59] bg-white resize-none"
            ></textarea>
          </div>

          <!-- Erreur -->
          <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-[#4A7C59] hover:bg-[#3a6347] disabled:opacity-60 text-white font-bold py-4 rounded-full transition-colors text-lg"
          >
            <span v-if="loading">Envoi en cours...</span>
            <span v-else>Envoyer le message</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
