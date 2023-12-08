"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sectorsController_1 = require("../controllers/sectorsController");
const router = express_1.default.Router();
router.get('/', sectorsController_1.getAllSectors);
router.post('/manufacturing', sectorsController_1.addManufacturingSector);
router.get('/manufacturing', sectorsController_1.getManufacturingSector);
router.post('/other', sectorsController_1.addOtherSector);
router.get('/other', sectorsController_1.getOtherSector);
router.post('/service', sectorsController_1.addServiceSector);
router.get('/service', sectorsController_1.getServiceSector);
exports.default = router;
