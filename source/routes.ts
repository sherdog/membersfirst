import express, { NextFunction } from 'express';
import config from './config';
import defaultRoutes from './components/default/routes/defaultRoutes';

const router = express.Router();

//include all route files here
//router.use()
router.use('/', defaultRoutes);

export default router