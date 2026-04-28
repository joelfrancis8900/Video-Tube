// app/upload/page.tsx (Server Component)
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import UploadClient from './UploadClient';

export default async function UploadPage() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    // If no user is logged in, redirect them to login immediately
    if (!user) {
        redirect('/login-sign-up-page');
    }

    // If they ARE logged in, show the client-side upload form
    return <UploadClient />;
}