"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModel = void 0;
var transactions_json_1 = require("../data/transactions.json");
var moment_1 = __importDefault(require("moment"));
var TransactionModel = /** @class */ (function () {
    function TransactionModel() {
        this.DateFields = ["EffectiveDate", "PostDate", "LastTranDate", "ActivityDate"];
        this.find = function (filters) {
            var records = transactions_json_1.transactions.filter(function (record) {
                return Object.keys(filters).every(function (filter) {
                    return filters[filter] === record[filter];
                });
            });
            return records;
        };
        this.FilterDateRange = function (objectArray, field, fromDate, toDate) {
            var filteredResults = objectArray.filter(function (record) {
                return moment_1.default(record.hasOwnProperty(field) && record[field], 'DD-MM-YYYY').isBetween(moment_1.default(fromDate, 'DD-MM-YYYY'), moment_1.default(toDate, 'DD-MM-YYYY'), null, '[]');
            });
            return filteredResults;
        };
        this.findTransactionByAccountId = function (accountId) {
            var results = transactions_json_1.transactions.filter(function (t) {
                return t.AccountNumber.localeCompare(accountId) === 0;
            });
            return results;
        };
        this.findTransactionById = function (transactionId) {
            var transaction = transactions_json_1.transactions.filter(function (t) {
                return t.$id === transactionId;
            })[0];
            return transaction;
        };
    }
    return TransactionModel;
}());
exports.TransactionModel = TransactionModel;
