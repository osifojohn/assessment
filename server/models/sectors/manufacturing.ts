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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
        // ... continue as needed for more nested children
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
