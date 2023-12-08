"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDetails = exports.addUserDetails = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userDetailsModel_1 = require("../models/userDetailsModel");
const types_1 = require("../types");
//@desc POST UserDetails
//@route GET /user-details
//@access public
exports.addUserDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = req.body;
    const response = new userDetailsModel_1.UserDetails(reqData);
    response.save();
    res.status(types_1.STATUSCODE.CREATED).json(response);
}));
//@desc Update UserDetails
//@route PUT /user-details/:id
//@access public
exports.updateUserDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, userDetails: userInformation } = req.body;
    const userInfo = yield userDetailsModel_1.UserDetails.findById(userId);
    if (!userInfo) {
        res.status(types_1.STATUSCODE.BAD_REQUEST);
        throw new Error('User not found');
    }
    const updatedUserInfo = yield userDetailsModel_1.UserDetails.findByIdAndUpdate(userId, userInformation, {
        new: true,
    });
    updatedUserInfo === null || updatedUserInfo === void 0 ? void 0 : updatedUserInfo.save();
    res.json(updatedUserInfo);
}));
