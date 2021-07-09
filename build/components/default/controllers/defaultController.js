"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transaction_model_1 = require("../model/transaction_model");
var ShowHomepage = function (req, res, next) {
    res.render("default/views/homepage");
};
var FetchAll = function (req, res, next) {
    var transactionModel = new transaction_model_1.TransactionModel();
    return res.json(transactionModel.find({}));
};
var FindTransactionByTranId = function (req, res, next) {
    var id = req.params.id;
    var transactionModel = new transaction_model_1.TransactionModel();
    return res.json(transactionModel.findTransactionById(id));
};
var FindTransactionByAccountId = function (req, res, next) {
    var id = req.params.id;
    var transactionModel = new transaction_model_1.TransactionModel();
    return res.json(transactionModel.findTransactionByAccountId(id));
};
var SearchTransaction = function (req, res, next) {
    //probably should validate this criteria
    var filters = req.body.criteria || {};
    var dateRange = req.body.date_range;
    var transactionModel = new transaction_model_1.TransactionModel();
    var results;
    if (dateRange) {
        var rawResults = transactionModel.find(filters);
        results = transactionModel.FilterDateRange(rawResults, dateRange.field, dateRange.from, dateRange.to);
    }
    else {
        results = transactionModel.find(filters);
    }
    res.json(results);
};
exports.default = {
    ShowHomepage: ShowHomepage,
    FetchAll: FetchAll,
    FindTransactionByTranId: FindTransactionByTranId,
    FindTransactionByAccountId: FindTransactionByAccountId,
    SearchTransaction: SearchTransaction,
};
