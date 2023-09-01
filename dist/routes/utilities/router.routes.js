"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const variables_routes_1 = __importDefault(require("./variables.routes"));
const api = (0, express_1.default)();
api.use('/api/variables', variables_routes_1.default);
exports.default = api;
