import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(
    request: Request,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await context.params;

        const video = await db.video.findUnique({
            where: {
                id: id,
            },
            include: {
                comments: true, // ✅ SAFE (no nested includes)
            },
        });

        if (!video) {
            return NextResponse.json(
                { error: 'Video not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(video);
    } catch (error) {
        console.error("DB ERROR:", error);

        return NextResponse.json(
            { error: 'Failed to fetch video' },
            { status: 500 }
        );
    }
}