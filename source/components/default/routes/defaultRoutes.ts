/** 
 * Defines Routes for components
 */
 import express from 'express';
 import defaultController from '../controllers/defaultController';
 
 const router = express.Router();
 
 router.get('/', defaultController.ShowHomepage);
 router.get('/transactions', defaultController.FetchAll);
 router.get('/transactions/:id', defaultController.FindTransactionByTranId);
 router.get('/transactions/account/:id', defaultController.FindTransactionByAccountId);
 router.post('/transactions/search', defaultController.SearchTransaction);
 
 export = router;