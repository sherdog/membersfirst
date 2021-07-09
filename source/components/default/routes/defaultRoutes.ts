/** 
 * Defines Routes for component
 */
 import express from 'express';
 import defaultController from '../controllers/defaultController';
 
 const router = express.Router();
 
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
 router.get('/', defaultController.FetchAll);
 router.get('/transactions/:id', defaultController.FindTransactionByTranId);
 router.get('/transactions/account/:id', defaultController.FindTransactionByAccountId);
 router.post('/transactions/search', defaultController.SearchTransaction);
 
 export = router;