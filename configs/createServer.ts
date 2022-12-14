import 'reflect-metadata';
import Koa from 'koa';
import {Container} from 'typedi';
import {useKoaServer, useContainer} from 'routing-controllers';

import {useBeforeMiddlewares} from './middlewares/koa.middlewares';

import routingConfigs from './routingControllersConfig';

// 注入外部服务到控制器
useContainer(Container);

const createServer = async (): Promise<Koa> => {
    const koa: Koa = new Koa();

    // 中间件
    useBeforeMiddlewares(koa);

    // 创建服务
    const app: Koa = useKoaServer<Koa>(koa, routingConfigs);

    return app;
};

export default createServer;
