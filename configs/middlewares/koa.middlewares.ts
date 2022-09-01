import Koa from 'koa';

const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');

import {isProd} from '../constants';

export const useBeforeMiddlewares = <T extends Koa>(app: T): T => {
    if (isProd()) {
        app.use(logger());
    }

    app.use(bodyParser());

    return app;
};
