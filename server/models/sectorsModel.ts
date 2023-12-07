import mongoose, { Schema, Document, Model } from 'mongoose';

interface ISector extends Document {
  name: string;
  children?: ISector[];
}

const sectorSchema = new Schema<ISector>({
  name: {
    type: String,
    required: true,
  },
  children: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Sector' }],
  },
});

type SectorModel = Model<ISector>;
const Sector: SectorModel = mongoose.model('Sector', sectorSchema);

export { ISector, SectorModel, Sector };
