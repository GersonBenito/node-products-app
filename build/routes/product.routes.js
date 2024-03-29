"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controlller_1 = require("./../controller/product.controlller");
const router = (0, express_1.Router)();
router.get('/', product_controlller_1.getEntries);
router.post('/', product_controlller_1.addEntry);
router.get('/:id', product_controlller_1.getEntryById);
router.delete('/:id', product_controlller_1.deleteEntryById);
router.put('/:id', product_controlller_1.updateEntryById);
exports.default = router;
