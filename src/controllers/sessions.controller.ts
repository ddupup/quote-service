import {
  BadRequestError,
  Post,
  JsonController,
  BodyParam,
  Get,
} from 'routing-controllers'
import { SessionsService } from '../services'
import { Prisma } from '@prisma/client'
import { Service } from 'typedi'

import { print } from 'configs/utils'

@JsonController()
@Service()
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Get('/sessions')
  async query() {
    print.log('1')
    return [{ test: 1 }]
  }

  @Post('/sessions')
  async create(
    @BodyParam('username') name: string,
  ): Promise<Prisma.SessionGetPayload<any>> {
    if (!name) {
      throw new BadRequestError('username is required')
    }
    return await this.sessionsService.create({ name })
  }
}
