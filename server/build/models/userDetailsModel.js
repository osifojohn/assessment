"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetails = void 0;
const mongoose_1 = require("mongoose");
const userDetailsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    agreeToTerms: {
        type: Boolean,
        required: [true, 'Please agree to terms'],
    },
    sectors: [
        {
            name: {
                type: String,
                required: [true, 'Please add the user password'],
            },
        },
    ],
}, {
    timestamps: true,
});
const UserDetails = (0, mongoose_1.model)('userDetails', userDetailsSchema);
exports.UserDetails = UserDetails;
