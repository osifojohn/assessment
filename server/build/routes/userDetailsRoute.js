"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userDetailsController_1 = require("../controllers/userDetailsController");
const router = express_1.default.Router();
router.post('/', userDetailsController_1.addUserDetails);
router.post('/:id', userDetailsController_1.updateUserDetails);
exports.default = router;
