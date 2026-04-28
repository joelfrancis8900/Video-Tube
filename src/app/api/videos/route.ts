import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { createClient } from '@/utils/supabase/server'; // Import your server client

export async function POST(request: Request) {
    try {
        // 1. Initialize Supabase and check for the user
        const supabase = await createClient();
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        // 2. If no user is found or there's an auth error, block the request
        if (authError || !user) {
            return NextResponse.json(
                { error: 'You must be logged in to upload videos' },
                { status: 401 }
            );
        }

        const { title, videoUrl, description, thumbnailUrl } = await request.json();

        // 3. Save to DB using the REAL user.id from Supabase
        const video = await db.video.create({
            data: {
                title: title,
                videoUrl: videoUrl,
                description: description,
                thumbnailUrl: thumbnailUrl,
                userId: user.id, // <--- No more temp ID! This links to the authenticated user.
            },
        });

        return NextResponse.json(video);
    } catch (error) {
        console.error("DB ERROR:", error);
        return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
    }
}

export async function GET() {
    try {
        // GET usually stays public (anyone can watch videos)
        const videos = await db.video.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                // Optional: if you want to show the uploader's name/avatar
                // user: true 
            }
        });

        return NextResponse.json(videos);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}