# Autant Goûter — Site vitrine

Café-restaurant bio, bon et local · Sainte-Adèle, QC

## Stack

- Vue 3 + Vite
- Tailwind CSS v4
- Supabase (formulaire contact)
- Resend (emails)
- Déploiement : Vercel ou Netlify

## Démarrage local

```bash
npm install
cp .env.example .env   # remplir les variables
npm run dev
```

## Variables d'environnement

Copier `.env.example` → `.env` et remplir :

| Variable | Description |
|---|---|
| `VITE_SUPABASE_URL` | URL de votre projet Supabase |
| `VITE_SUPABASE_ANON_KEY` | Clé publique Supabase |
| `RESEND_API_KEY` | Clé API Resend (côté serveur uniquement) |

## Supabase — Table contacts

```sql
create table contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  nom text not null,
  telephone text,
  type_demande text not null,
  message text not null,
  traite boolean default false
);

-- RLS : permettre les inserts publics
alter table contacts enable row level security;
create policy "Allow public insert" on contacts for insert with check (true);
```

## Déploiement Vercel

```bash
npm run build
# Connecter le repo à Vercel
# Ajouter les variables d'env dans le dashboard Vercel
```

## Déploiement Netlify

```bash
npm run build
# dist/ → publier sur Netlify
# Ajouter _redirects dans public/ pour le routing SPA :
# /*  /index.html  200
```

## Modifier le menu

Éditer `src/data/menu.js` — chaque catégorie a un tableau `items[]`.

## Emails Resend

Pour envoyer les emails de notification à Marjorie, créer une Supabase Edge Function ou une API Route Vercel qui appelle Resend avec la clé `RESEND_API_KEY` (ne jamais exposer côté client).
