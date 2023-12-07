import { Schema, InferSchemaType, model } from 'mongoose';

const OtherSectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

type OtherSectorType = InferSchemaType<typeof OtherSectorSchema>;
const OtherSector = model<OtherSectorType>('otherSector', OtherSectorSchema);
export { OtherSectorType, OtherSector };
