import { Schema, InferSchemaType, model } from 'mongoose';

const allSectorsSchema = new Schema({
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

type allSectorsType = InferSchemaType<typeof allSectorsSchema>;
const allSectors = model<allSectorsType>('allSectors', allSectorsSchema);
export { allSectorsType, allSectors };
