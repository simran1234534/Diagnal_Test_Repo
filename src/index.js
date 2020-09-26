import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import environment from '../environment';
import routes from './app/routes/user';

const app = express();


if (!global.status_codes)
    global.status_codes = require('../src/app/class/Util/StatusCodes');

if (!global.custom_message)
    global.custom_message = require('../src/config/message');

if (!global.Response)
    global.Response = require('../src/app/class/Util/Response');


// getting application environment
const env = process.env.NODE_ENV;
// getting application config based on environment
const envConfig = environment[env];
// setting port value
const Port = envConfig.port;

app.use(morgan(envConfig.logs));
// app.use(busboyBodyParser({
//     limit: '50mb',
//     multi: true,
//     extended: true
// }));
app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

app.use(cors());
app.use('/api', routes);


app.listen(Port, () => {
var host = server.address().172.31.32.204;
    console.log(`Listening to requests on-: http://host:${Port}`);
});

module.exports = app;
