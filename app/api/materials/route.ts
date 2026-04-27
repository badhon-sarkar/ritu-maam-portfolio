import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import connectDB from '@/lib/mongodb';
import Material from '@/models/Material';
import { verifyAdminCookie } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const course = searchParams.get('course');
    const fileType = searchParams.get('fileType');
    const search = searchParams.get('search');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};
    if (course && course !== 'all') query.courseName = course;
    if (fileType && fileType !== 'all') query.fileType = fileType.toUpperCase();
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { courseName: { $regex: search, $options: 'i' } },
      ];
    }

    const materials = await Material.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: materials });
  } catch (error) {
    console.error('GET materials error:', error);
    return NextResponse.json({ error: 'Failed to fetch materials' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAdminCookie()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const courseName = formData.get('courseName') as string;
    const semester = formData.get('semester') as string;

    if (!file || !title || !description || !courseName || !semester) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/msword',
      'application/zip',
      'application/x-zip-compressed',
    ];

    if (!allowedTypes.includes(file.type) && file.size > 0) {
      // Fallback: check extension
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!['pdf', 'pptx', 'ppt', 'docx', 'doc', 'zip'].includes(ext || '')) {
        return NextResponse.json({ error: 'Invalid file type. Allowed: PDF, PPTX, DOCX, ZIP' }, { status: 400 });
      }
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size must be under 50MB' }, { status: 400 });
    }

    // Save file
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    await mkdir(uploadDir, { recursive: true });

    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
    const safeTitle = title.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30);
    const uniqueName = `${Date.now()}_${safeTitle}.${ext}`;
    const filePath = path.join(uploadDir, uniqueName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filePath, buffer);

    // Determine file type label
    const extToType: Record<string, string> = {
      pdf: 'PDF', pptx: 'PPTX', ppt: 'PPTX',
      docx: 'DOCX', doc: 'DOCX', zip: 'ZIP',
    };
    const fileType = extToType[ext] || ext.toUpperCase();

    await connectDB();
    const material = await Material.create({
      title,
      description,
      courseName,
      semester,
      fileType,
      fileName: file.name,
      filePath: `/uploads/${uniqueName}`,
      fileSize: file.size,
    });

    return NextResponse.json({ success: true, data: material }, { status: 201 });
  } catch (error) {
    console.error('POST material error:', error);
    return NextResponse.json({ error: 'Failed to upload material' }, { status: 500 });
  }
}
