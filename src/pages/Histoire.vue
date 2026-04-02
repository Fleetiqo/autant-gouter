<template>
  <!-- Hero -->
  <section class="relative pt-16">
    <div class="relative h-72 md:h-96 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200"
        alt="intérieur café Autant Goûter ambiance chaleureuse Sainte-Adèle"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div class="text-center text-white px-4">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-3" style="font-family: 'Nunito', sans-serif;">
            Notre histoire
          </h1>
          <p class="text-lg text-gray-200">Bio et local, sans se prendre au sérieux.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- L'histoire -->
  <section class="bg-[#FEFDFB] py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p class="text-[#4A7C59] font-semibold text-sm uppercase tracking-widest mb-3">L'idée de départ</p>
          <h2 class="text-3xl font-extrabold text-[#333333] mb-6" style="font-family: 'Nunito', sans-serif;">
            Marjorie avait une mission
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Quand Marjorie Pentier a ouvert Autant Goûter au Centre sportif Pays-d'en-Haut, tout le monde lui a dit que c'était une mauvaise idée. Un café bio dans un aréna ? Vraiment ?
          </p>
          <p class="text-gray-600 leading-relaxed mb-4">
            Elle a quand même foncé. Parce qu'elle savait que les gens qui viennent nager, jouer au hockey ou s'entraîner méritent mieux qu'un hot-dog réchauffé et un café de machine.
          </p>
          <p class="text-[#D4845A] text-lg italic font-medium" style="font-family: 'Lora', serif;">
            "On voulait remplacer le hot-dog poutine par de la vraie bouffe. Mission accomplie."
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-xl bg-[#F5F0E8] flex items-center justify-center h-72">
          <div class="text-center p-8">
            <p class="text-6xl mb-4">👩‍🍳</p>
            <p class="text-[#4A7C59] font-bold text-lg" style="font-family: 'Nunito', sans-serif;">Marjorie Pentier</p>
            <p class="text-gray-500 text-sm">Fondatrice, Autant Goûter</p>
          </div>
        </div>
      </div>

      <!-- Philosophie -->
      <div class="bg-[#F5F0E8] rounded-3xl p-8 md:p-12 mb-16">
        <h2 class="text-2xl font-extrabold text-[#333333] mb-6 text-center" style="font-family: 'Nunito', sans-serif;">
          Notre philosophie
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <p class="text-4xl mb-3">🌱</p>
            <h3 class="font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">Bio, vraiment</h3>
            <p class="text-gray-600 text-sm">Pas juste une étiquette. On choisit nos ingrédients avec soin, on lit les étiquettes, on fait confiance à nos producteurs.</p>
          </div>
          <div class="text-center">
            <p class="text-4xl mb-3">📍</p>
            <h3 class="font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">Local, pour vrai</h3>
            <p class="text-gray-600 text-sm">On travaille avec des producteurs des Laurentides. Ce qui pousse ici, on le cuisine ici. C'est aussi simple que ça.</p>
          </div>
          <div class="text-center">
            <p class="text-4xl mb-3">👐</p>
            <h3 class="font-bold text-[#4A7C59] mb-2" style="font-family: 'Nunito', sans-serif;">Fait maison, toujours</h3>
            <p class="text-gray-600 text-sm">Zéro compromis. Chaque soupe, chaque cookie, chaque focaccia est préparé sur place selon nos recettes. Pas de raccourcis.</p>
          </div>
        </div>
      </div>

      <!-- Producteurs -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
            alt="producteurs locaux Laurentides bio"
            class="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p class="text-[#4A7C59] font-semibold text-sm uppercase tracking-widest mb-3">Nos partenaires</p>
          <h2 class="text-2xl font-extrabold text-[#333333] mb-4" style="font-family: 'Nunito', sans-serif;">
            Les Laurentides dans votre assiette
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            On s'approvisionne auprès de producteurs locaux des Laurentides. Légumes de saison, produits laitiers, viandes — on sait d'où ça vient et on en est fiers.
          </p>
          <p class="text-gray-600 leading-relaxed">
            Quand les arrivages changent, le menu change. C'est ça, cuisiner local. Et c'est pour ça que chaque visite peut être une petite surprise.
          </p>
        </div>
      </div>

      <!-- Smoothies section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-[#4A7C59] font-semibold text-sm uppercase tracking-widest mb-3">Après le sport</p>
          <h2 class="text-2xl font-extrabold text-[#333333] mb-4" style="font-family: 'Nunito', sans-serif;">
            La récompense méritée
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4">
            Vous venez de nager 40 longueurs ? De jouer 3 périodes ? De soulever des poids ? Vous méritez mieux qu'une barre de chocolat du distributeur.
          </p>
          <p class="text-gray-600 leading-relaxed mb-6">
            Un smoothie frais, une soupe chaude, une focaccia grillée sur commande — c'est ça, Autant Goûter. La vraie récompense après l'effort.
          </p>
          <p class="text-[#D4845A] text-lg italic" style="font-family: 'Lora', serif;">
            "Alors, autant goûter ?"
          </p>
        </div>
        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800"
            alt="smoothie frais après sport bio"
            class="w-full h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-[#4A7C59] text-white py-12 px-4 text-center">
    <h2 class="text-2xl font-extrabold mb-4" style="font-family: 'Nunito', sans-serif;">
      Venez nous voir au Centre sportif
    </h2>
    <p class="text-green-100 mb-6">252 Bd de Sainte-Adèle · Sainte-Adèle, QC</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <RouterLink
        to="/menu"
        class="bg-white text-[#4A7C59] font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
      >
        Voir le menu
      </RouterLink>
      <RouterLink
        to="/contact"
        class="bg-[#D4845A] hover:bg-[#c0734a] text-white font-bold px-8 py-3 rounded-full transition-colors"
      >
        Nous contacter
      </RouterLink>
    </div>
  </section>
</template>
