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
exports.getManufacturingSector = exports.addManufacturingSector = exports.getServiceSector = exports.addServiceSector = exports.getOtherSector = exports.addOtherSector = exports.getAllSectors = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const other_1 = require("../models/sectors/other");
const types_1 = require("../types");
const service_1 = require("../models/sectors/service");
const sectors_1 = require("../sectors");
const manufacturing_1 = require("../models/sectors/manufacturing");
const MANUFACTURING_SECTOR_ID = '6572047af214fc089d287b1f';
const OTHER_SECTOR_ID = '6571998e7776d69e64b6bde6';
const SERVICE_SECTOR_ID = '65719dfd1b637b27c8e7bd34';
const getAllSectors = (req, res) => {
    const sectors = sectors_1.sectorsData;
    return res.json(sectors);
};
exports.getAllSectors = getAllSectors;
exports.addOtherSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = req.body;
    const sector = yield other_1.OtherSector.create(reqData);
    res.status(types_1.STATUSCODE.CREATED).json({
        message: `${sector === null || sector === void 0 ? void 0 : sector._id} added sector`,
    });
}));
exports.getOtherSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const other = yield other_1.OtherSector.findById(OTHER_SECTOR_ID);
    res.json(other);
}));
exports.addServiceSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqData = req.body;
    const sector = yield service_1.ServicesSector.create(reqData);
    res.status(types_1.STATUSCODE.CREATED).json({
        message: `${sector === null || sector === void 0 ? void 0 : sector._id} added sector`,
    });
}));
exports.getServiceSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield service_1.ServicesSector.findById(SERVICE_SECTOR_ID);
    res.json(service);
}));
exports.addManufacturingSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('goooof');
    const reqData = req.body;
    const sector = yield manufacturing_1.ManufacturingSector.create(reqData);
    res.status(types_1.STATUSCODE.CREATED).json({
        data: sector,
    });
}));
exports.getManufacturingSector = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const manufacturing = yield manufacturing_1.ManufacturingSector.findById(MANUFACTURING_SECTOR_ID);
    res.json(manufacturing);
}));
