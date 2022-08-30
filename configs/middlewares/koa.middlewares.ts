import Koa from 'koa'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import { isProd } from '../constants'

const useBeforeMiddlewares = <T extends Koa>(app: T): T => {
  if (isProd()) {
    app.use(logger())
  }

  app.use(bodyParser())

  return app
}


export default useBeforeMiddlewares;