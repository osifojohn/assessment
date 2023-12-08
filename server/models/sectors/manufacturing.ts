import { Schema, InferSchemaType, model } from 'mongoose';

const ManufacturingSectorSchema = new Schema({
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
      children: [
        {
          name: {
            type: String,
            required: true,
          },
        },
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
    {
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
      ],
    },
  ],
});

type ManufacturingSectorType = InferSchemaType<
  typeof ManufacturingSectorSchema
>;
const ManufacturingSector = model<ManufacturingSectorType>(
  'ManufacturingSector',
  ManufacturingSectorSchema
);
export { ManufacturingSectorType, ManufacturingSector };
