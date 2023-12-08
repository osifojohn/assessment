"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const types_1 = require("./../types");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case types_1.STATUSCODE.BAD_REQUEST:
            res.json({
                title: 'Validation Failed',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case types_1.STATUSCODE.NOT_FOUND:
            res.json({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case types_1.STATUSCODE.UNAUTHORIZED:
            res.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case types_1.STATUSCODE.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case types_1.STATUSCODE.SERVER_ERROR:
            res.json({
                title: 'Internal or Server Error',
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        default:
            console.log('No Error, All good !');
    }
};
exports.errorHandler = errorHandler;
