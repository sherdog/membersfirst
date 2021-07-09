import app from './index';
import config from './config';
import logging from './logging/logging';
import http from 'http';

const NAMESPACE = "Server";
const server = http.createServer(app);
server.listen(config.express.port, function() {
    logging.info(NAMESPACE, 'Listening on port ' + config.express.port + ' in mode: ' + config.environment);
});