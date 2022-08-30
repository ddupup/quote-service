import { RoutingControllersOptions } from 'routing-controllers'
import * as controllers from '@app/controllers/index'

import { dictToArray } from './utils'

const routingConfigs: RoutingControllersOptions = {

  // 控制器
  controllers: dictToArray(controllers),

  // 中间件
  middlewares: [__dirname + '/middlewares/*.ts'],

  // 拦截器
  interceptors: [__dirname + '/interceptors/*.ts'], 

  // 路由前缀
  // e.g. api => http://hostname:port/{routePrefix}/{controller.method}
  routePrefix: '/api',

  // 实例化参数
  classTransformer: true,

  // 自动校验参数
  // learn more: https://github.com/typestack/class-validator
  validation: true, 
}

export default routingConfigs;
