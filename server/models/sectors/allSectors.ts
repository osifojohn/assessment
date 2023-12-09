import { Schema, InferSchemaType, model } from 'mongoose';
import { ManufacturingSector } from './manufacturing';
import { OtherSector } from './other';
import { ServicesSector } from './service';

const AllSectorSchema = new Schema({
  manufacturing: ManufacturingSector.schema,
  other: OtherSector.schema,
  service: ServicesSector.schema,
});

type SectorType = InferSchemaType<typeof AllSectorSchema>;
const AllSector = model<SectorType>('AllSector', AllSectorSchema);
export { SectorType, AllSector };
