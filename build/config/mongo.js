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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbConnectiion = () => __awaiter(void 0, void 0, void 0, function* () {
    const DB_URI = process.env.DB_URI || '';
    const DB_USER = process.env.DB_USER || '';
    const DB_PASSWORD = process.env.DB_PASSWORD || '';
    const DB_NAME = process.env.DB_NAME || '';
    const config = {
        dbName: DB_NAME,
        user: DB_USER,
        pass: DB_PASSWORD,
    };
    try {
        yield (0, mongoose_1.connect)(DB_URI, config);
        console.log('Connection to database mongo success');
    }
    catch (error) {
        console.log('Error to connect database -->', error);
    }
});
exports.default = dbConnectiion;
