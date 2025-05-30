import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

const createSupabaseClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      accessToken: async () => (await auth())?.getToken() ?? null,
    }
  )

  export default createSupabaseClient;