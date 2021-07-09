"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var defaultRoutes_1 = __importDefault(require("./components/default/routes/defaultRoutes"));
var router = express_1.default.Router();
//include all route files here
//router.use()
router.use('/', defaultRoutes_1.default);
exports.default = router;
