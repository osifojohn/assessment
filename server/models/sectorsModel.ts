import mongoose, { Schema, InferSchemaType, model } from 'mongoose';

const SectorSchema = new Schema({
  manufacturing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ManufacturingSector',
    required: true,
  },
  other: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OtherSector',
    required: true,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServicesSector',
    required: true,
  },
});

type SectorType = InferSchemaType<typeof SectorSchema>;
const sector = model<SectorType>('sector', SectorSchema);
export { SectorType, sector };
