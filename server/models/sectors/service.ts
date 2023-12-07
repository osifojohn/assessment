import { Schema, InferSchemaType, model } from 'mongoose';

const ServicesSectorSchema = new Schema({
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

type ServicesSectorType = InferSchemaType<typeof ServicesSectorSchema>;
const ServicesSector = model<ServicesSectorType>(
  'ServicesSector',
  ServicesSectorSchema
);
export { ServicesSectorType, ServicesSector };
