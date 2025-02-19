"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
const PORT = process.env.PORT || 3000;
data_source_1.AppDataSource.initialize()
    .then((res) => {
    console.log("connecting to DataBase");
    server_1.default.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
});
