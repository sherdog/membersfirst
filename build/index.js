"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config"));
var routes_1 = __importDefault(require("./routes"));
var NAMESPACE = "App";
var app = express_1.default();
app.enable('strict routing');
app.set('view options', { pretty: true });
app.set('views', path_1.default.join(__dirname, 'components'));
app.set('view engine', 'pug');
app.set('config', config_1.default);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
if (config_1.default.environment === 'development') {
    app.locals.pretty = true;
}
/**** SETUP CORS  *****/
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
app.use(express_1.default.static('public'));
/** Setup Routing */
app.use('/', routes_1.default);
app.use(function (req, res, next) {
    var error = new Error('Not found');
    res.status(404).json({
        message: error.message
    });
});
exports.default = app;
