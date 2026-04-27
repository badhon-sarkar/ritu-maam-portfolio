import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IMaterial extends Document {
  title: string;
  description: string;
  courseName: string;
  semester: string;
  fileType: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  downloadCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const MaterialSchema = new Schema<IMaterial>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    courseName: { type: String, required: true, trim: true },
    semester: { type: String, required: true, trim: true },
    fileType: { type: String, required: true },
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileSize: { type: Number, required: true },
    downloadCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

MaterialSchema.index({ courseName: 1 });
MaterialSchema.index({ fileType: 1 });
MaterialSchema.index({ createdAt: -1 });

const Material: Model<IMaterial> =
  mongoose.models.Material || mongoose.model<IMaterial>('Material', MaterialSchema);

export default Material;
