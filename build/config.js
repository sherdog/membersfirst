"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = module.exports;
config.environment = 'development';
config.express = {
    port: process.env.PORT || 3000,
    ip: '127.0.0.1'
};
exports.default = config;
