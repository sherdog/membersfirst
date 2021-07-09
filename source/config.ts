import { debug } from 'console';
import dotenv from 'dotenv';

dotenv.config();

var config = module.exports

config.environment = 'development'; 

config.express = {
    port: process.env.PORT  || 3000,
    ip: '127.0.0.1'
}
export default config;
