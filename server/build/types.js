"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUSCODE = void 0;
var STATUSCODE;
(function (STATUSCODE) {
    STATUSCODE[STATUSCODE["SUCCESS"] = 200] = "SUCCESS";
    STATUSCODE[STATUSCODE["CREATED"] = 201] = "CREATED";
    STATUSCODE[STATUSCODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    STATUSCODE[STATUSCODE["ACCEPTED"] = 202] = "ACCEPTED";
    STATUSCODE[STATUSCODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUSCODE[STATUSCODE["FORBIDDEN"] = 403] = "FORBIDDEN";
    STATUSCODE[STATUSCODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUSCODE[STATUSCODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUSCODE || (exports.STATUSCODE = STATUSCODE = {}));