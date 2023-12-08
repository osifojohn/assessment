"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturingSector = void 0;
const mongoose_1 = require("mongoose");
const ManufacturingSectorSchema = new mongoose_1.Schema({
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
const ManufacturingSector = (0, mongoose_1.model)('ManufacturingSector', ManufacturingSectorSchema);
exports.ManufacturingSector = ManufacturingSector;
