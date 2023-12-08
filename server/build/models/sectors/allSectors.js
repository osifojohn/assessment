"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allSectors = void 0;
const mongoose_1 = require("mongoose");
const allSectorsSchema = new mongoose_1.Schema({
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
const allSectors = (0, mongoose_1.model)('allSectors', allSectorsSchema);
exports.allSectors = allSectors;
