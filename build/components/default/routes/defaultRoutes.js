"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
/**
 * Defines Routes for component
 */
var express_1 = __importDefault(require("express"));
var defaultController_1 = __importDefault(require("../controllers/defaultController"));
var router = express_1.default.Router();
/*
{
    Search Criteria
    "criteria": {
        "AccountNumber":"0000169799",
        "FieldName": "VALUE"
    },
    "date_range":  {
        "from": "2021-04-19T00:00:00",
        "to": "2021-12-20T00:00:00",
        "field": "EffectiveDate"
    }
    
}
 */
router.get('/', defaultController_1.default.FetchAll);
router.get('/transactions/:id', defaultController_1.default.FindTransactionByTranId);
router.get('/transactions/account/:id', defaultController_1.default.FindTransactionByAccountId);
router.post('/transactions/search', defaultController_1.default.SearchTransaction);
module.exports = router;
