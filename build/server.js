"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var config_1 = __importDefault(require("./config"));
var logging_1 = __importDefault(require("./logging/logging"));
var http_1 = __importDefault(require("http"));
var NAMESPACE = "Server";
var server = http_1.default.createServer(index_1.default);
server.listen(config_1.default.express.port, function () {
    logging_1.default.info(NAMESPACE, 'Listening on port ' + config_1.default.express.port + ' in mode: ' + config_1.default.environment);
});
