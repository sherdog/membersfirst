
import { NextFunction, Request, Response } from 'express';
import { TransactionModel } from '../model/transaction_model';
import path from 'path';

const ShowHomepage = (req:Request, res:Response, next:NextFunction) => {
    res.render("default/views/homepage");
}

const FetchAll = (req: Request, res: Response, next: NextFunction) => {
    let transactionModel = new TransactionModel();
    return res.json(transactionModel.find({}));
};

const FindTransactionByTranId = (req:Request, res:Response, next: NextFunction) => {
    
    let id = req.params.id;
    let transactionModel = new TransactionModel();
    return res.json(transactionModel.findTransactionById(id));
};

const FindTransactionByAccountId = (req:Request, res:Response, next: NextFunction) => {

    let id = req.params.id;
    let transactionModel = new TransactionModel();
    return res.json(transactionModel.findTransactionByAccountId(id));

};

const SearchTransaction = (req:Request, res: Response, next: NextFunction) => {

    //probably should validate this criteria
    var filters : any = req.body.criteria || {};
    var dateRange : any = req.body.date_range;
    let transactionModel = new TransactionModel();

    let results;

    if (dateRange) {
        let rawResults = transactionModel.find(filters);
        results = transactionModel.FilterDateRange(rawResults, dateRange.field, dateRange.from, dateRange.to);
    } else {
        results = transactionModel.find(filters);
    }

    res.json(results);
}

export default {
    ShowHomepage, 
    FetchAll,
    FindTransactionByTranId,
    FindTransactionByAccountId,
    SearchTransaction,
};