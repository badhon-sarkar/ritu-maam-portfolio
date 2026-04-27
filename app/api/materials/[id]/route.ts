import { NextRequest, NextResponse } from 'next/server';
import { unlink } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import Material from '@/models/Material';
import { verifyAdminCookie } from '@/lib/auth';

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const material = await Material.findById(params.id);
    if (!material) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    // Increment download count
    material.downloadCount += 1;
    await material.save();
    return NextResponse.json({ success: true, data: material });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch material' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminCookie()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { title, description, courseName, semester } = body;

    const material = await Material.findByIdAndUpdate(
      params.id,
      { title, description, courseName, semester },
      { new: true, runValidators: true }
    );

    if (!material) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: material });
  } catch {
    return NextResponse.json({ error: 'Failed to update material' }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminCookie()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await connectDB();
    const material = await Material.findById(params.id);
    if (!material) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    // Delete physical file
    try {
      const filePath = path.join(process.cwd(), 'public', material.filePath);
      await unlink(filePath);
    } catch {
      // File might not exist, continue
    }

    await Material.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete material' }, { status: 500 });
  }
}
