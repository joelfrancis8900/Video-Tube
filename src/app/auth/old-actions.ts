'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const supabase = await createClient()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) redirect('/login-sign-up-page?error=Could not authenticate user')

    // On success, go to the home page
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = await createClient()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log("Attempting signup for:", email)

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })

    if (error) {
        // This will print the actual Supabase error (e.g., "User already registered")
        console.log("ACTUAL SUPABASE ERROR:", error.message)

        // This sends that SPECIFIC message to your browser
        return redirect(`/login-sign-up-page?error=${encodeURIComponent(error.message)}`)
    }

    // If no error, let's see what data we got
    console.log("Signup success! User ID:", data.user?.id)
    redirect('/')
}

export async function logout() {
    const supabase = await createClient()

    // This clears the cookie and ends the session
    await supabase.auth.signOut()

    // Redirect the user back to your specific login page
    redirect('/login-sign-up-page')
}