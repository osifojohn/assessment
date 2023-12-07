import { Schema, InferSchemaType, model } from 'mongoose';

const otherSectorSchema = new Schema({
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

type otherSectorType = InferSchemaType<typeof otherSectorSchema>;
const otherSector = model<otherSectorType>('otherSector', otherSectorSchema);
export { otherSectorType, otherSector };
