import { debug } from 'console';
import dotenv from 'dotenv';

dotenv.config();

var config = module.exports
var PRODUCTION = process.env.NODE_ENV === 'production'

if (process.env.NODE_ENV === "production")
    config.environment = process.env.NODE_ENV;
else
    config.environment = 'development'; 

config.express = {
    port: process.env.PORT  || 3000,
    ip: '127.0.0.1'
}

config.mongodb = {
    port: process.env.MONGODB_PORT || 27017,
    host: process.env.MONGODB_HOST || 'mongodb://admin:TtIMExkAwsoBsUZe@zeus-shard-00-00-vmfn8.azure.mongodb.net:27017,zeus-shard-00-01-vmfn8.azure.mongodb.net:27017,zeus-shard-00-02-vmfn8.azure.mongodb.net:27017/thirtyone?ssl=true&replicaSet=Zeus-shard-0&authSource=admin&retryWrites=true&w=majority'
}
//host: process.env.MONGODB_HOST || 'mongodb://admin:TtIMExkAwsoBsUZe@zeus-vmfn8.azure.mongodb.net/thirtyone'
config.session = {
    hash: "mb4_+3@c%3LQ=QYPkXwBX#vbh#H32NHv-CbpXvRjhx6*$@AJZx-f%EmsRkhZjsH6"   
}

if (PRODUCTION)
{
    config.express.ip = '0.0.0.0'
}

config.email = {
    default_from: 'admin@localhost'
}

config.game_session = {
    default: {
        next_action_time_in_seconds: 15
    }
}

export default config;
