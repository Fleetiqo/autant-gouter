import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export function useContact() {
  const loading = ref(false)
  const success = ref(false)
  const error = ref(null)

  async function submitContact(formData) {
    loading.value = true
    error.value = null
    success.value = false

    try {
      // Insert dans Supabase
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey)
        const { error: dbError } = await supabase
          .from('contacts')
          .insert([{
            nom: formData.nom,
            telephone: formData.telephone,
            type_demande: formData.type_demande,
            message: formData.message,
            traite: false,
          }])
        if (dbError) throw dbError
      }

      // Email via Resend (API route ou edge function)
      // En prod, appeler une edge function Supabase ou une API Vercel
      // Pour la démo, on simule le succès
      await new Promise(r => setTimeout(r, 600))

      success.value = true
    } catch (e) {
      error.value = 'Une erreur est survenue. Appelez-nous au 514-833-2707.'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  return { loading, success, error, submitContact }
}
