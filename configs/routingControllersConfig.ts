import {createKoaServer, RoutingControllersOptions} from 'routing-controllers';

import * as controllers from '@src/controllers/index';
import {HeaderMiddleware} from './middlewares/route.middlewares';
import * as interceptors from './interceptors';

import {dictToArray} from './utils';

const routingConfigs: RoutingControllersOptions = {
    // 控制器
    controllers: dictToArray(controllers),

    // 中间件
    middlewares: [HeaderMiddleware],

    // 拦截器
    interceptors: dictToArray(interceptors),

    // 路由前缀
    // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
    routePrefix: '/api',

    // 实例化参数
    classTransformer: true,

    // 自动校验参数
    // learn more: https://github.com/typestack/class-validator
    validation: true,
};

export default routingConfigs;
