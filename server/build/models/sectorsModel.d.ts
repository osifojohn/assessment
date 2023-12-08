/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { InferSchemaType } from 'mongoose';
declare const SectorSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
type SectorType = InferSchemaType<typeof SectorSchema>;
declare const sector: mongoose.Model<{
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
}> & {
    manufacturing: mongoose.Types.ObjectId;
    other: mongoose.Types.ObjectId;
    service: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
}, any>;
export { SectorType, sector };
