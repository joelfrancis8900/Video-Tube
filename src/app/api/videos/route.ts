import { NextResponse } from 'next/server';
import db from '@/lib/db'; // Make sure this is the ONLY prisma import

export async function POST(request: Request) {
    try {
        const { title, videoUrl } = await request.json();

        const video = await db.video.create({
            data: {
                title: title,
                videoUrl: videoUrl,
                userId: "temp-user-id", // Ensure this matches schema
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
        const videos = await db.video.findMany({
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json(videos);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}