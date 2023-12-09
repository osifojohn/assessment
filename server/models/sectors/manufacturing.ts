import { Schema, InferSchemaType, model } from 'mongoose';

const ChildSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const ManufacturingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [ChildSchema],
});

const ManufacturingSectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  children: [ManufacturingSchema],
});

type ManufacturingSectorType = InferSchemaType<
  typeof ManufacturingSectorSchema
>;
const ManufacturingSector = model<ManufacturingSectorType>(
  'ManufacturingSector',
  ManufacturingSectorSchema
);
export { ManufacturingSectorType, ManufacturingSector };
