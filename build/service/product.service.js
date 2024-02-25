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
exports.updateEntryById = exports.deleteEntryById = exports.getEntryById = exports.addEntry = exports.getEntries = void 0;
const product_model_1 = __importDefault(require("./../model/product.model"));
const getEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.default.find();
    return products;
});
exports.getEntries = getEntries;
const addEntry = (entry) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.create(entry);
    return product;
});
exports.addEntry = addEntry;
const getEntryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findById(id);
    return product;
});
exports.getEntryById = getEntryById;
const deleteEntryById = (id) => __awaiter(void 0, void 0, void 0, function* () { return (yield product_model_1.default.findByIdAndDelete(id)); });
exports.deleteEntryById = deleteEntryById;
const updateEntryById = (id, entry) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.default.findByIdAndUpdate({ _id: id }, entry);
    if (!product) {
        return null;
    }
    return yield product_model_1.default.findById(id);
});
exports.updateEntryById = updateEntryById;
