'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const supabase = await createClient()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) redirect('/login-sign-up-page?error=Could not authenticate user')

    redirect('/')
}

export async function signup(formData: FormData) {
    // This stops everyone immediately.
    redirect('/login-sign-up-page?error=Registration is disabled for this demo')
}

export async function logout() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login-sign-up-page')
}