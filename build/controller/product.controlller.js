"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateEntryById = exports.deleteEntryById = exports.getEntryById = exports.addEntry = exports.getEntries = void 0;
const productService = __importStar(require("./../service/product.service"));
const getEntries = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productService.getEntries();
    return res.status(200).json({
        status: 200,
        data: products,
        message: 'Get entries success'
    });
});
exports.getEntries = getEntries;
const addEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield productService.addEntry(req.body);
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'New entry added suceess'
    });
});
exports.addEntry = addEntry;
const getEntryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield productService.getEntryById(id);
    if (!product) {
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        });
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Get entry success'
    });
});
exports.getEntryById = getEntryById;
const deleteEntryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const product = yield productService.deleteEntryById(id);
    if (!product) {
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        });
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Delete entry success'
    });
});
exports.deleteEntryById = deleteEntryById;
const updateEntryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const entry = req.body;
    const product = yield productService.updateEntryById(id, entry);
    if (!product) {
        return res.status(400).json({
            status: 400,
            data: {},
            message: `Entry by id ${id} was not found`
        });
    }
    return res.status(200).json({
        status: 200,
        data: product,
        message: 'Update entry success'
    });
});
exports.updateEntryById = updateEntryById;
