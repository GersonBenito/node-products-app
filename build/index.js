"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const app = (0, express_1.default)();
// app.use(cors());
app.use(express_1.default.json());
const PORT = process.env.PORT || 8080;
app.get('/ping', (_, res) => {
    console.log('ping');
    return res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});