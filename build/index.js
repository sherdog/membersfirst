"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config"));
var router = express_1.default();
router.enable('strict routing');
router.set('view options', { pretty: true });
router.set('views', path_1.default.join(__dirname, 'components'));
router.set('view engine', 'pug');
router.set('config', config_1.default);
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
if (config_1.default.environment === 'development') {
    router.locals.pretty = true;
}
router.use(express_1.default.static('public'));
router.use(require('./routes'));
exports.default = router;
