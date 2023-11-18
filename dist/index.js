"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 8000;
app.get("/", () => {
    return `<h1>Hello World</h1>`;
});
app.listen(port, () => {
    console.log(`app is listening in the port ${port}`);
});
