import express, { NextFunction } from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import config from './config';
import routeController from './routes';

const NAMESPACE = "App";
const app = express();

app.enable('strict routing');
app.set('view options', { pretty: true });
app.set('views', path.join(__dirname, 'components'));
app.set('view engine', 'pug');
app.set('config', config);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

if (config.environment === 'development')
{
    app.locals.pretty = true;
}

/**** SETUP CORS  *****/

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

app.use(express.static('public'));

/** Setup Routing */
app.use('/', routeController);
app.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});
export default app;