"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = require("http");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./middleware/errorHandler");
const userDetailsRoute_1 = __importDefault(require("./routes/userDetailsRoute"));
const sectorsRoutes_1 = __importDefault(require("./routes/sectorsRoutes"));
/* CONFIGURATION */
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const server = (0, http_1.createServer)(app);
/* ROUTES */
app.use('/user-details', userDetailsRoute_1.default);
app.use('/sectors', sectorsRoutes_1.default);
// app.use('/other', addManufacturingSector);
// app.use('/sectors', getAllSectors);
app.use(errorHandler_1.errorHandler);
const PORT = process.env.PORT || 8000;
/* MONGOOSE SETUP */
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => {
    server.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
    .catch((error) => console.log(`${error} did not connect`));
// getAllSectors();
