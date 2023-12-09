import { Schema, InferSchemaType, model } from 'mongoose';

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [childSchema],
});

const ServicesSectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [serviceSchema],
});

type ServicesSectorType = InferSchemaType<typeof ServicesSectorSchema>;
const ServicesSector = model<ServicesSectorType>(
  'ServicesSector',
  ServicesSectorSchema
);
export { ServicesSectorType, ServicesSector };
