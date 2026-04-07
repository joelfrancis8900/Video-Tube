import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: Request) {
    try {
        // 1. Add "description" here to pull it from the request
        const { title, videoUrl, description } = await request.json();

        const video = await db.video.create({
            data: {
                title: title,
                videoUrl: videoUrl,
                description: description, // 2. Add this line to save it to the DB
                userId: "temp-user-id",
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