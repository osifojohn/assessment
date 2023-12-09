import { Schema, InferSchemaType, model } from 'mongoose';

const ChildSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const OtherShema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [ChildSchema],
});

const OtherSectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [OtherShema],
});

type OtherSectorType = InferSchemaType<typeof OtherSectorSchema>;
const OtherSector = model<OtherSectorType>('otherSector', OtherSectorSchema);
export { OtherSectorType, OtherSector };
