import { Schema, InferSchemaType, model } from 'mongoose';

const servicesSectorSchema = new Schema({
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
    },
  ],
});

type servicesSectorType = InferSchemaType<typeof servicesSectorSchema>;
const servicesSector = model<servicesSectorType>(
  'servicesSector',
  servicesSectorSchema
);
export { servicesSectorType, servicesSector };
