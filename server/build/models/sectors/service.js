"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesSector = void 0;
const mongoose_1 = require("mongoose");
const ServicesSectorSchema = new mongoose_1.Schema({
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
const ServicesSector = (0, mongoose_1.model)('ServicesSector', ServicesSectorSchema);
exports.ServicesSector = ServicesSector;
