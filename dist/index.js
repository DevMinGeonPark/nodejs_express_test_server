"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3000;
const path = require("path");
app.use(express_1.default.static(path.join('public')));
app.get('/route', (req, res) => {
    res.send('<img src="public/images/1_0.jpg">');
});
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});
app.listen(PORT, () => {
    console.log('connected 3000 port');
});
