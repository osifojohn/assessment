"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtherSector = void 0;
const mongoose_1 = require("mongoose");
const OtherSectorSchema = new mongoose_1.Schema({
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
const OtherSector = (0, mongoose_1.model)('otherSector', OtherSectorSchema);
exports.OtherSector = OtherSector;
