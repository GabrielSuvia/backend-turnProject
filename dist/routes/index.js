"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const turnsRouter_1 = __importDefault(require("./turnsRouter")); //rutas de turno
const routes = (0, express_1.Router)();
routes.use("/user", userRouter_1.default);
routes.use("/turn", turnsRouter_1.default);
exports.default = routes;
